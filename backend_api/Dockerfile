FROM python:3.5-alpine
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY 'secret'
RUN apk update && \
    apk add --virtual build-deps gcc musl-dev && \
    apk add postgresql-dev
RUN mkdir /code
WORKDIR /code
ADD ./requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN chmod +x ./deploy.sh
RUN ./deploy.sh production && python manage.py collectstatic --noinput
EXPOSE 8000
CMD ["gunicorn", "docker_wp.wsgi"]
