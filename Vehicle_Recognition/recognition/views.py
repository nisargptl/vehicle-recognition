from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from tensorflow import keras
import numpy as np
from recognition.models import CarDetails
from .models import CarDetails
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.vgg16 import preprocess_input
from django.db.models import Func, F
from django.db.models.functions import Abs
from django.db.models import Q
import csv


with open('models/final_car_details.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

model = keras.models.load_model('C:/Users/shabb/projects/Vehicle_Recognition/models/New_model_93_classes.h5')


def car_details_info(request):
    details = CarDetails.objects.all()
    return render(request,'compare2.html', {'det':details})
 
def home1(request):
    context = {'a':1}
    return render(request,'home.html',context)

def index(request):
    context = {'a':1}
    return render(request,'home_ff.html',context)

def filter(request):
    context = {'a':1}
    return render(request,'filter_ff.html',context)

def compare(request):
    return render(request,'compare_ff.html')


def predictImage(request):

    
    

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
    print(predicted_array)
    predicted = np.argmax(predicted_array[0])
    print(predicted)
    print(predicted_array[0][predicted])
    car_model = data[predicted][0]
    print(car_model)
    details = CarDetails.objects.filter(name = car_model)
   # prices = CarDetails.objects.order_by('price')
    #mycar1 = CarDetails.objects.order_by(Abs('price' - details.price))
    #import ipdb; ipdb.set_trace()
    mycar1 = CarDetails.objects.filter(~Q(name = car_model),price__lte = details[0].price).order_by('-price')
    mycar2 = CarDetails.objects.filter(~Q(name = car_model),price__gte = details[0].price).order_by('price')
    #import ipdb;ipdb.set_trace()
    
    context = {'filePathName':filePathName,'car_model':data[predicted][0],'predicted':predicted_array[0][predicted],'details'
    :details,'car1':mycar1[0],'car2' : mycar2[0],'car3':mycar2[1]}
    
    return render(request,'home_ff.html',context)

def contact_us(request):
    context = {'a':1}
    return render(request,'contact.html',context)

def cc(request):
    print(request)
    car1 = CarDetails.objects.filter(name = 'myCar1')
    car2 = CarDetails.objects.filter(name = 'myCar2')
    context = {'car1':car1,'car2':car2}
    return render(request,'compare_ff.html',context)
