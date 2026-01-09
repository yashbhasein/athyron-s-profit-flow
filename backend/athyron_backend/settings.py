from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
SECRET_KEY = os.environ.get('DJANGO_SECRET', 'replace-me')
DEBUG = os.environ.get('DJANGO_DEBUG', '1') == '1'
ALLOWED_HOSTS = ['*']

# Application definition
INSTALLED_APPS = [
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'athyron_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # Serve index.html from the frontend build output `dist` directory.
        # For development, also include project root so the unbuilt `index.html` is available.
        'DIRS': [
            str(Path(BASE_DIR).parent / 'dist'),
            str(Path(BASE_DIR).parent),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [],
        },
    },
]

WSGI_APPLICATION = 'athyron_backend.wsgi.application'

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    str(Path(BASE_DIR).parent / 'dist'),
    # allow serving static files directly from project root during development
    str(Path(BASE_DIR).parent),
]
STATIC_ROOT = str(Path(BASE_DIR).parent / 'staticfiles')

# Use simple file-based static serving in production via WhiteNoise
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
