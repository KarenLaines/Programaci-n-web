import uuid
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .redis_client import redis_client

def generate_unique_key():
    # intenta generar una uuid que no exista ya en Redis
    for _ in range(5):
        key = str(uuid.uuid4())
        if not redis_client.exists(key):
            return key
    # fallback: uuid4 sin comprobar
    return str(uuid.uuid4())

@api_view(['POST'])
def hide_secret(request):
    message = request.data.get('secret')  # React envía 'secret'
    if not message:
        return Response({'error': 'Debe enviar un mensaje'}, status=status.HTTP_400_BAD_REQUEST)

    key = generate_unique_key()
    redis_client.set(key, message)
    return Response({'id': key}, status=status.HTTP_201_CREATED)  # <-- cambiar key a id

@api_view(['GET'])
def reveal_secret(request, id):
    message = redis_client.get(id)
    if not message:
        return Response({'error': 'Este secreto ya fue revelado o no existe'}, status=status.HTTP_404_NOT_FOUND)
    redis_client.delete(id)
    return Response({'secret': message}, status=status.HTTP_200_OK)
