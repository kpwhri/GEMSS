FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
  apt-get install -y postgresql postgresql-contrib
RUN apt-get install -y libpq-dev python3-dev

WORKDIR /api
COPY requirements.txt /api/requirements.txt
RUN pip install -r requirements.txt

ADD . /api/

# Reveal default Django port + admin interface
EXPOSE 8000 8080
