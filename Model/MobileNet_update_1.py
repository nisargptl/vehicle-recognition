#important libraries and depedancies
import tensorflow as tf
from tensorflow.keras import *
from tensorflow.keras.layers import *
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from keras.applications.mobilenet import MobileNet, preprocess_input
import numpy as np
from glob import glob
import matplotlib.pyplot as plt
import os
os.environ['TF_XLA_FLAGS'] = '--tf_xla_enable_xla_devices'
tf.version
assert tf.test.is_built_with_cuda()
gpus = tf.config.list_physical_devices('GPU')
if gpus:
try:
tf.config.experimental.set_visible_devices(gpus[0], 'GPU')
logical_gpus = tf.config.experimental.list_logical_devices('GPU')
print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPU")
except RuntimeError as e:
print(e)

#loading previous model
model=tf.keras.models.load_model('D:/car196/car100/New_model_100_classes_V1.h5')

#freezing all layers
for layer in model.layers:
layer.trainable = False

#Unfreezing last 30 layer

for layer in model.layers[-30:]:
layer.trainable = True

model.summary() #model summary

#configuring the optimizer
adam=tf.keras.optimizers.Adam(
learning_rate=1e-5,
beta_1=0.9,
beta_2=0.999,
epsilon=1e-07,
decay = 0.3
)

#compiling the model
model.compile(
loss='categorical_crossentropy',
optimizer="adam",
metrics=['accuracy']
)


#preparing the data and adding augmentation
from tensorflow.keras.preprocessing.image import ImageDataGenerator
train_datagen = ImageDataGenerator(preprocessing_function=preprocess_input,
rotation_range = 30,
horizontal_flip = True)

test_datagen = ImageDataGenerator(preprocessing_function=preprocess_input)

#creating dataset for training, setting the batch size and labels

training_set = train_datagen.flow_from_directory('D:/car196/car100/training',
target_size = (227, 227),
batch_size = 96,
class_mode = 'categorical',
shuffle=True)
test_set = test_datagen.flow_from_directory('D:/car196/car100/testing',
target_size = (227, 227),
batch_size = 64,
class_mode = 'categorical',
shuffle=True)

#adding callbacks
callback = [tf.keras.callbacks.EarlyStopping(monitor='loss', patience=4,mode = 'auto', restore_best_weights=False),
tf.keras.callbacks.ReduceLROnPlateau(monitor="val_loss",factor=0.1, patience=2, mode="auto",min_delta=0.0001,min_lr=0),
]


#fitting the model 
r = model.fit(
training_set,
validation_data=test_set,
epochs=15,
steps_per_epoch=len(training_set),
validation_steps=len(test_set),
callbacks = [callback]
)


#plots for loss vs val_loss and accuracy vs val_accuracy
plt.plot(r.history['loss'], label='train loss')
plt.plot(r.history['val_loss'], label='val loss')
plt.legend()
plt.show()
plt.plot(r.history['accuracy'], label='train acc')
plt.plot(r.history['val_accuracy'], label='val acc')
plt.legend()
plt.show()

#saving the new trained model
model.save('D:/car196/car100/New_model_100_classes_V2.h5')

#evaluating the model for testing dataset
model.evaluate(test_set)