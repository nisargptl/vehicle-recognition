from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from tensorflow import keras
import numpy as np
from recognition.models import CarDetails
from .models import CarDetails
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.preprocessing.image import img_to_array
from keras.applications.mobilenet import preprocess_input
from django.db.models import Func, F
from django.db.models.functions import Abs
from django.db.models import Q
import csv
import os

with open('models/Car_names.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

model = keras.models.load_model('/home/nisarg/Desktop/sen project/vehicle-recognition/Vehicle_Recognition/models/New_Final_model.h5')


def car_details_info(request):
    details = CarDetails.objects.all()
    return render(request,'compare1.html', {'det':details})
 
def contact(request):
    return render(request,'contact.html')


def index(request):
    context = {'a':1}
    return render(request,'home_ff.html',context)

def filter(request):
    context = {'a':1}
    return render(request,'filter_ff.html',context)

def compare(request):
    return render(request,'compare_ff.html')


def predictImage(request):

    pre_image = os.listdir('media')
    pre_image.remove('1_100')
    print(pre_image)
    for i in pre_image:
        os.remove('media/'+i)
    

    fileObj = request.FILES['filePath']
    fs = FileSystemStorage()
    filePathName = fs.save(fileObj.name,fileObj)
    filePathName = fs.url(filePathName)
    testImage = '.'+filePathName
    image = load_img(testImage, target_size=(227, 227))
    image = img_to_array(image)
    image = image.reshape((1, 227, 227, 3))
    image = preprocess_input(image)
    predicted_array = model.predict(image)
    print(filePathName)
    predicted = np.argmax(predicted_array[0])
    print(predicted)
    print(predicted_array[0][predicted])
    car_model = data[predicted][0]
    print(car_model)
    details = CarDetails.objects.filter(name = car_model)
    mycar1 = CarDetails.objects.filter(~Q(name = car_model),price__lte = details[0].price).order_by('-price')
    mycar2 = CarDetails.objects.filter(~Q(name = car_model),price__gte = details[0].price).order_by('price')
    context = {'filePathName':filePathName,'car_model':data[predicted][0],'predicted':predicted_array[0][predicted],'details'
    :details,'car1':mycar1[0],'car2' : mycar2[0],'car3':mycar2[1]}
    return render(request,'home_ff.html',context)


def cc(request):
    print(request.POST)
    car1 = CarDetails.objects.filter(name = request.POST['myCar1'])
    car2 = CarDetails.objects.filter(name = request.POST['myCar2'])
    print(car1)
    context = {'car1':car1,'car2':car2}
    return render(request,'compare_ff.html',context)

price_details = {'one':[0,2000000],'two':[2000001,4000000],'three':[4000001,10000000],'four':[10000001,50000000],'five':
    [50000001,1000000000]}
print(price_details['one'])

def fil1(val,n,j,request):
    if n==0:
        min = price_details.get(val)[0]
        max = price_details.get(val)[1]
        set = CarDetails.objects.filter(Q(price__gte = min) & Q(price__lte = max))
    elif n==1:
            set = CarDetails.objects.filter(type__in = val)
    elif n==2:

        set = CarDetails.objects.filter(company__in=val)
    elif n==3:
        set = CarDetails.objects.filter(seater = val)
    elif n ==4:
        set = CarDetails.objects.filter(fuel = val)
    elif n == 5:
        set = CarDetails.objects.filter(gear = val)
    return set

def fil2(set,val,n,j,request):
    if n==0:
        min = price_details.get(val)[0]
        max = price_details.get(val)[1]
        set = CarDetails.objects.filter(Q(price__gte = min) & Q(price__lte = max))
    elif n==1:
        set = set.filter(type__in = val)
    elif n==2:
        set = set.filter(company__in = val)
    elif n==3:
        set = set.filter(seater = val)
    elif n ==4:
        set = set.filter(fuel = val)
    elif n == 5:
        set = set.filter(gear = val)
    return set




def fo(request):
    #print(len(request.POST))
    
    Name = {'price':0,'type':1,'company':2,'seater':3,'fuel':4,'gear':5}
    price_details = {'one':[0,2000000],'two':[2000001,4000000],'three':[4000001,10000000],'four':[10000001,50000000],'five':
    [50000001]}
    
    
    for i,j in zip(request.POST,range(len(request.POST))):
        if i == "csrfmiddlewaretoken":
            continue
        if j ==1:
            if Name.get(i) == 2 or Name.get(i) == 1:
                req = dict(request.POST)
                print(req.get(i))
                set = fil1(req.get(i),Name.get(i),j,request)
            else:
                set = fil1(request.POST.get(i),Name.get(i),j,request)
            continue
        if Name.get(i) == 2 or Name.get(i) == 1:
            req = dict(request.POST)
            set = fil2(set,req.get(i),Name.get(i),j,request)
        else:
            set = fil2(set,request.POST.get(i),Name.get(i),j,request)
    print(set)
    context = {'set':set}

    return render(request,'filter_ff.html',context)