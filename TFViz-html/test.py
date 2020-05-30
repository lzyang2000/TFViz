import eel

# TensorFlow and tf.keras
import tensorflow as tf
from tensorflow import keras

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt

train_data = None
train_labels = None
test_data = None
test_labels = None
eel.init("web")


@eel.expose  # Expose this function to js
def import_dataset(dataset_name):
    if dataset_name == "fashion_mnist":
        fashion_mnist = keras.datasets.fashion_mnist
        (train_data, train_labels), (test_data, test_labels) = fashion_mnist.load_data()
        plt.figure()
        plt.imshow(train_data[0])
        plt.colorbar()
        plt.grid(False)
        plt.show()


eel.start("index.html")
