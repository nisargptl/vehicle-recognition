from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from tensorflow import keras
import numpy as np

model = keras.models.load_model('/home/nisarg/Desktop/sen project/vehicle-recognition/Vehicle_Recognition/models/New_model.h5')
list = ['Acura Integra Type R 2001','Acura RL Sedan 2012','Acura TL Sedan 2012','Acura TL Type-S 2008','Acura TSX Sedan 2012',
'Acura ZDX Hatchback 2012','AM General Hummer SUV 2000','Aston Martin V8 Vantage Convertible 2012','Aston Martin V8 Vantage Coupe 2012',
'Aston Martin Virage Convertible 2012']


def index(request):
    context = {'a':1}
    return render(request,'home.html',context)

def compare1(request):
    context = {'a':1}
    return render(request,'compare1.html',context)


def predictImage(request):
    fileObj = request.FILES['filePath']
    fs = FileSystemStorage()
    filePathName = fs.save(fileObj.name,fileObj)
    filePathName = fs.url(filePathName)
    testImage = '.'+filePathName
    image = keras.preprocessing.image.load_img(testImage, target_size=(227, 227))
    image = keras.preprocessing.image.img_to_array(image)
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
    predicted_array = model.predict(image)
    predicted = np.max(predicted_array[0])
    context = {'filePathName':filePathName,'car_model':list[int(predicted)]}
    return render(request,'compare2.html',context)

