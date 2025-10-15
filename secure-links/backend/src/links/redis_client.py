import redis
from django.conf import settings

# Conexión al servidor Redis
redis_client = redis.StrictRedis(
    host=settings.REDIS_HOST,
    port=settings.REDIS_PORT,
    db=0,
    decode_responses=True
)
