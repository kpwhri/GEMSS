FROM python:3
ENV PYTHONUNBUFFERED 1

WORKDIR /api
COPY requirements.txt /api/requirements.txt
RUN pip install -r requirements.txt

ADD . /api/

# Reveal default Django port + admin interface
EXPOSE 8000 8080
