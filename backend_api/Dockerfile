FROM python:3.5
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD ./requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
# RUN chmod +x ./deploy.sh
# RUN ./deploy.sh development
CMD ["gunicorn", "docker_wp.wsgi"]