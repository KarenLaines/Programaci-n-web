# Imagen base oficial de Python
FROM python:3.12-slim

# Crear usuario no root
RUN useradd -m appuser
USER appuser

# Crear directorio de trabajo
WORKDIR /home/appuser/app

# Copiar archivos de requerimientos y proyecto
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .


EXPOSE 8000


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
