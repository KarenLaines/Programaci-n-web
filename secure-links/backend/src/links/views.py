from django.shortcuts import render

# Create your views here.

import uuid
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .redis_client import redis_client

# Endpoint para ocultar un mensaje
@api_view(['POST'])
def hide_secret(request):
    message = request.data.get('message')
    if not message:
        return Response({'error': 'Debe enviar un mensaje'}, status=status.HTTP_400_BAD_REQUEST)

    # Generar una key única
    key = str(uuid.uuid4())

    # Guardar el mensaje en Redis
    redis_client.set(key, message)

    return Response({'key': key}, status=status.HTTP_201_CREATED)


# Endpoint para revelar un mensaje
@api_view(['GET'])
def reveal_secret(request, key):
    # Buscar el mensaje
    message = redis_client.get(key)

    if not message:
        return Response({'error': 'Este secreto ya fue revelado o no existe'}, status=status.HTTP_404_NOT_FOUND)

    # Eliminar el mensaje para que no se pueda volver a acceder
    redis_client.delete(key)

    return Response({'message': message}, status=status.HTTP_200_OK)
