"""Vehicle_Recognition URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from recognition import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    url('^$',views.index,name = 'homepage'),
    url('compare',views.compare,name = 'compare'),
    url('predictImage',views.predictImage,name = 'predictImage'),
    url('det',views.car_details_info),
    #url('home1',views.home1,name = 'home1'),
    url('filter',views.filter,name='filter'),
    url('contact',views.contact_us,name = 'contact')
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
