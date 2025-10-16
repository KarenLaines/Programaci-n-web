FROM python:3.11-slim

# set workdir
WORKDIR /app

# copy requirements & install
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# copy project
COPY src/ /app/

ENV PYTHONUNBUFFERED=1
ENV REDIS_HOST=redis
ENV REDIS_PORT=6379
ENV DJANGO_DEBUG=True

# expose port
EXPOSE 8000

# comando por defecto: usar runserver para desarrollo.
CMD ["gunicorn", "secretlink.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "1"]
# Si prefieres usar runserver en dev, cambia la línea por:
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
