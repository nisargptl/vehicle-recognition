from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from tensorflow import keras
import numpy as np
from recognition.models import CarDetails
from .models import CarDetails
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.preprocessing.image import img_to_array
from keras.applications.mobilenet import preprocess_input
import csv

with open('models/Car_names.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

model = keras.models.load_model('/home/nisarg/Desktop/sen project/vehicle-recognition/Vehicle_Recognition/models/New_model_100_classes_V2.h5')


def car_details_info(request):
    details = CarDetails.objects.all()
    return render(request,'compare1.html', {'det':details})
 
def home1(request):
    context = {'a':1}
    return render(request,'home1.html',context)

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
    context = {'filePathName':filePathName,'car_model':data[predicted][0],'predicted':predicted_array[0][predicted],'details'
    :details}
    return render(request,'home_ff.html',context)


def cc(request):
    print(request.POST['myCar1'])
    car1 = CarDetails.objects.filter(name = request.POST['myCar1'])
    car2 = CarDetails.objects.filter(name = request.POST['myCar2'])
    context = {'car1':car1,'car2':car2}
    return render(request,'compare_ff.html',context)