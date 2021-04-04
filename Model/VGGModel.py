import tensorflow as tf
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    # Restrict TensorFlow to only allocate 1GB * 2 of memory on the first GPU
    try:
        tf.config.experimental.set_virtual_device_configuration(
            gpus[0],
            [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=6144)])
        logical_gpus = tf.config.experimental.list_logical_devices('GPU')
        print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
    except RuntimeError as e:
        # Virtual devices must be set before GPUs have been initialized
        print(e)

tf.__version__

import scipy.io
mat = scipy.io.loadmat('D:\car196\cars_annos.mat')

import os
Names = mat['class_names'][0]
os.chdir(r'D:\car196\training')
for i in range(len(Names)):
    path = str(Names[i][0])
    if not os.path.exists(path):
        os.makedirs(path) 

os.chdir(r'D:\car196\testing')
for i in range(len(Names)):
    path = str(Names[i][0])
    if not os.path.exists(path):
        os.makedirs(path) 

mat = scipy.io.loadmat('D:\car196\cars_train_annos.mat')

import tensorflow as tf
from tensorflow.keras import *
from tensorflow.keras.layers import *
from tensorflow.keras.models import Model
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.applications.vgg16 import preprocess_input
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
import numpy as np
import hera
from glob import glob
import matplotlib.pyplot as plt

IMAGE_SIZE = [227, 227]
vgg =VGG16(input_shape= [227,227, 3], weights='imagenet', include_top=False)

for layer in vgg.layers[:17]:
    layer.trainable = False

folders = glob(r'D:\car196\newtrain1\*')

conv_output = vgg.get_layer("input_1").output  
x = layers.Conv2D(64, (3, 3),
                      activation='selu',
                      padding='same',
                      name='block1_conv1')(conv_output)
x = layers.Conv2D(64, (3, 3),
                      activation='selu',
                      padding='same',
                      name='block1_conv2')(x)
x = layers.MaxPooling2D((2, 2), strides=(2, 2), name='block1_pool')(x)

x = layers.Conv2D(128, (3, 3),
                      activation='selu',
                      padding='same',
                      name='block2_conv1')(x)
x = layers.Conv2D(128, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block2_conv2')(x)
x = layers.MaxPooling2D((2, 2), strides=(2, 2), name='block2_pool')(x)


x = layers.Conv2D(256, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block3_conv1')(x)
x = layers.Conv2D(256, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block3_conv2')(x)
x = layers.Conv2D(256, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block3_conv3')(x)
x = layers.MaxPooling2D((2, 2), strides=(2, 2), name='block3_pool')(x)


x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block4_conv1')(x)
x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block4_conv2')(x)
x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block4_conv3')(x)
x = layers.MaxPooling2D((2, 2), strides=(2, 2), name='block4_pool')(x)
x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block5_conv1')(x)
x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block5_conv2')(x)
x = layers.Conv2D(512, (3, 3),
                      activation='selu',
                      padding='same',  
                      kernel_regularizer =tf.keras.regularizers.l2(0.01),
                      name='block5_conv3')(x)
x = layers.MaxPooling2D((2, 2), strides=(2, 2), name='block5_pool')(x)

model = Model(inputs=vgg.input, outputs=x)

x = Flatten()(x)
prediction = Dense(len(folders), activation='softmax')(x)
model = Model(inputs=vgg.input, outputs=prediction)
model.load_weights('D:/car196/previews/NewModel.h5')


model.layers


layer1 = model.layers[1]
layer1.trainable = True
layer2 = model.layers[2]
layer2.trainable = True
layer3 = model.layers[3]
layer3.trainable = True
layer4 = model.layers[4]
layer4.trainable = True
layer5 = model.layers[5]
layer5.trainable = True
layer6 = model.layers[6]
layer6.trainable = True
layer7 = model.layers[7]
layer7.trainable = True
layer8 = model.layers[8]
layer8.trainable = True
layer9 = model.layers[9]
layer9.trainable = True
layer10 = model.layers[10]
layer10.trainable = True
layer11 = model.layers[11]
layer11.trainable = False
layer12 = model.layers[12]
layer12.trainable = False
layer13 = model.layers[13]
layer13.trainable = False
layer14 = model.layers[14]
layer14.trainable = False
layer15 = model.layers[15]
layer15.trainable = False
layer16 = model.layers[16]
layer16.trainable = False
layer17 = model.layers[17]
layer17.trainable = False
layer18 = model.layers[18]
layer18.trainable = False
layer19 = model.layers[19]
layer19.trainable = False
layer20 = model.layers[20]
layer20.trainable = True



adam=tf.keras.optimizers.Adam(
        learning_rate=0.000001,
        beta_1=0.9,
        beta_2=0.999,
        epsilon=1e-07,
        decay = 0.0
)
model.compile(
  loss='categorical_crossentropy',
  optimizer=adam,
  metrics=['accuracy', tf.keras.metrics.TopKCategoricalAccuracy(k=5)]
)



model.summary()

from tensorflow.keras.preprocessing.image import ImageDataGenerator

train_datagen = ImageDataGenerator(preprocessing_function = preprocess_input,
                                   rescale = 1./255,
                                   zoom_range=0.2)
test_datagen = ImageDataGenerator(preprocessing_function = preprocess_input , rescale = 1./255)
training_set = train_datagen.flow_from_directory('D:/car196/newtrain1',
                                                 target_size = (227, 227),
                                                 batch_size = 32,
                                                 class_mode = 'categorical')
test_set = test_datagen.flow_from_directory('D:/car196/testing',
                                            target_size = (227, 227),
                                            batch_size = 32,
                                            class_mode = 'categorical')

checkpoint_filepath = 'D:\car196\previews'
callback = [tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=3,mode = 'auto', restore_best_weights=True),
            tf.keras.callbacks.ReduceLROnPlateau(monitor="val_loss",factor=0.9,patience=2,verbose=1,mode="auto",min_delta=0.0001,min_lr=0),
            tf.keras.callbacks.ModelCheckpoint(filepath=checkpoint_filepath, save_weights_only=True,monitor='val_accuracy',mode='max',save_best_only=True)]

r = model.fit(
  training_set,
  validation_data=test_set,
  epochs=1,
  steps_per_epoch=len(training_set),
  validation_steps=len(test_set),
  callbacks = [callback]
)


model.save_weights('D:/car196/previews/NewModel.h5')


model.save('D:/car196/previews/NewModel.h5')