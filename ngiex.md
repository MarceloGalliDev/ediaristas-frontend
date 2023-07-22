## GUNICORN
Pip install gunicorn
Alterar allowed_hosts para 0.0.0.0
gunicorn --bind 0.0.0.0:8000 blog_treinaweb.wsgi


## Supervisor
sudo apt-get install supervisor
sudo nano /etc/supervisor/conf.d/blog_treinaweb.conf

[program:blog_treinaweb]
command=/home/fagner/Documentos/projeto_django/venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/fagner/Documentos/projeto_django/blog_treinaweb.sock blog_treinaweb.wsgi:application
directory=/home/fagner/Documentos/projeto_django/
user=blog_treinaweb
group=www-data
autostart=true
autorestart=true
killasgroup=true
stdout_logfile=/home/fagner/Documentos/projeto_django/supervisor.log
redirect_stderr=True
environment=DJANGO_SETTINGS_MODULE=“blog_treinaweb.settings", LANG="en_US.utf8", LC_ALL="en_US.UTF-8", LC_LANG="en_US.UTF-8"


sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl status blog_treinaweb

## Nginx
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/blog_treinaweb

server {
        listen      80;
        server_name localhost;
        charset     utf-8;
        access_log  /var/log/nginx/blog_treinaweb-access.log;
        error_log   /var/log/nginx/blog_treinaweb-error.log;
        client_max_body_size 75M;
        location /media  {
                alias /home/fagner/Documentos/projeto_django/media;
        }
        location /static {
                alias /home/fagner/Documentos/projeto_django/static;
        }
        location / {
                include proxy_params;
                proxy_pass http://unix:/home/fagner/Documentos/projeto_django/blog_treinaweb.sock;
        }
}


sudo ln -s /etc/nginx/sites-available/blog_treinaweb /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx


## Adicionar arquivos estáticos
settings.py

STATIC_ROOT = os.path.join(BASE_DIR, ‘static’)
ALLOWED_HOSTS = [“localhost”]

Python manage.py collect static

sudo supervisorctl restart blog_treinaweb