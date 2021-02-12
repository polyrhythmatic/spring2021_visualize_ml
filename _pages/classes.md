---
layout: default
permalink: /classes
---

# Classes

## Class 4 - 2/10

## Perceptrons

Earlier we covered machine learning such as linear regression and KNN.

Supervised Machine Learning is all about ‘learning’ a function given a training set of examples.

Machine learning methods should derive a function that can generalize well to inputs not in the training set, since then we can actually apply it to inputs for which we do not have an output.

In this class we are going to cover the simplest model of an artificial neural network out there.

What is an artificial neural network (ANN)? What is a perceptron?

These all started as attempts mathematically model the neuron. The question generally was - what kind of computational systems can be made that are inspired by the biological neuron?

The perceptron is a form of supervised learning that can differentiate between linearly separable datasets.

Further material:

Watch:
* [10.1: Introduction to Neural Networks - The Nature of Code](https://youtu.be/XJ7HLz9VYz0)
* [10.2: Neural Networks: Perceptron Part 1 - The Nature of Code (first 12 minutes)](https://youtu.be/ntKn5TPHHAk)
* [3.1: Introduction to Session 3 - What is Machine Learning?](https://youtu.be/LvIa0-ZKCrc)

Read: 
* [A 'Brief' History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/ai/a-brief-history-of-neural-nets-and-deep-learning/)
* [Nature of Code Chapter 10. Neural Networks](https://natureofcode.com/book/chapter-10-neural-networks/)
* [A Quick Introduction to Neural Networks](https://ujjwalkarn.me/2016/08/09/quick-intro-neural-networks/)
* [Nature of Code Intelligence and learning - Week 4 Neural Networks](https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/blob/master/week4-neural-networks/README.md)
* [A Visual and Interactive Guide to the Basics of Neural Networks (really great interactive)](http://jalammar.github.io/visual-interactive-guide-basics-neural-networks/)
* [Calculate the Decision Boundary of a Single Perceptron - Visualizing Linear Separability](https://medium.com/@thomascountz/calculate-the-decision-boundary-of-a-single-perceptron-visualizing-linear-separability-c4d77099ef38)

## Class 3 - 2/3

## Vectors and classification

### What is a vector?


* A vector has magnitude
* A vector has direction

A vector's magnitude is the length - the size. A vector is a set of instructions on how to get from the tail to the tip

### Why vectors?

  Vectors can be used for physics. Vectors can explain movement, static forces, and so many other things. Vectors can be used to describe position in a space. But when we talk about space we often think of 2d or 3d. Vectors can exist in many more dimenstions. And sometimes it makes sense to pair a bunch of numbers together! There are a bunch of operations we want to do on both numbers so we consider them together

Vector math we reviewed:

* Add/sub
* mult/div
* Magnitude
* Normalize

Machine learning:

What is machine learning? 
- Arthur Samuel, 1959: "Machine Learning: Field of study that gives computers the ability to learn without being explicitly programmed."

Supervised learning:

- Dataset has labels associated with the data, learning model is fitting a relationship between variables

Unsupervised learning:
- Data with no labels. The machine learning algorithm learns relationships between the different pieces of data. Commonly used for things such as clustering.

Reinforcement learning
- Agents interact with environments. Taking suitable action to maximize reward, such as running as fast as possible with four legs or playing space invaders.

Classification and regression

  Both involve making a prediction based on input data

Classification
- Classification has discrete categories - examples include identifying images

Regression
-Continuous identification - for example, percentage of emotion present, age


KNN - K Nearest Neighbor

* "Tell me who your neighbor is, and I’ll tell you who you are"
* "K-Nearest Neighbor" is a machine learning algorithm used for both classification and regression. It is a "lazy learning" algorithm due to the fact that there is really is no learning at all. New data points are classified / valued according to a distance comparison with every data point in a training set. [source](https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/blob/master/week3-classification-regression/README.md)
* Nice interactive demo [here](https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js) a bit further down the page

The notebook from the class should be listed on the "notebooks" page.

More reading:

* [CS231 - Python Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/)
* [K-Nearest Neighbors Algorithm in Python and Scikit-Learn](https://stackabuse.com/k-nearest-neighbors-algorithm-in-python-and-scikit-learn/)
* [ml4a KNN Classification](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/classification_kNN.ipynb)
* [Pandas](https://towardsdatascience.com/pandas-dataframe-a-lightweight-intro-680e3a212b96)
* [Pandas documentation](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)
* [How to master Pandas](https://towardsdatascience.com/how-to-master-pandas-8514f33f00f6)
* [Pandas cheat sheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
* [Numpy cheat sheet](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Numpy_Python_Cheat_Sheet.pdf)


## Class 2 - 1/27

using pip (pythons package manager) we installed jupyter notebook and other dependencies:

```console
$ pip3 install jupyterlab
$ pip3 install matplotlib
```

We then run the command below to open a jupyter notebook. Make sure you are in the correct directory when you run this command.

```console
$ jupyter notebook
```

You can review the in class exercises we did here:

* [Intro to Python](https://github.com/channelstudio/spring2021_visualize_ml/blob/master/notebooks/Intro%20to%20Python.ipynb)

Some recommended resources:
* [learnpython.org](https://www.learnpython.org/)
* [Codecademy](https://www.codecademy.com/learn/learn-python-3)
* [Freecodecamp](https://guide.freecodecamp.org/python/)
* Learn Python 3 the Hard Way (book)

* [A good post on whitespace for those who are curious](https://stackoverflow.com/questions/13884499/what-is-python-whitespace-and-how-does-it-work)
* [Another good post on scoping for index variables - or why "fruit" persisted outside the scope of our for loop](https://eli.thegreenplace.net/2015/the-scope-of-index-variables-in-pythons-for-loops/)

## Class 1 - 1/20

Introductory class. We began by having everyone answer the following questions:

* What program are you in?
* Why are you taking this class?
* What is your background and experience?
* What are you interested in?

This class is about using machine learning to explore archives.

The data problem - we have more information now than ever before, and it is growing exponentially.

Cultural institutions are digitizing and open sourcing massive collections. Beyond this, what is a dataset? Perhaps shopping inventories are datasets? Movies are a dataset. Google photos is a dataset. 

There are growing datasets that we want to be able to search on a semantic basis.

At the same time, people expect better and better digital experiences. Companies like Google, Uber, etc are spending tons on design to create the best experiences they can. They are setting the bar for online experiences.

Design is about sorting/organizing/making information digestible. We are designing the experience of exploring a dataset using machine learning as a design tool.

A main concept for the class is using machine learning and AI to augment or facilitate, not to create.

We looked at the following references (the first six do not use ML):

* [Below the Surface](https://belowthesurface.amsterdam/en/vondsten)
* [Cooper Hewitt Collection](https://collection.cooperhewitt.org/)
* [Art Palette](https://artsexperiments.withgoogle.com/artpalette/colors/242726-886c5f-d04b18-dfb24a-d4c5aa)
* [Coins](https://uclab.fh-potsdam.de/coins/)
* [NYPL](http://publicdomain.nypl.org/pd-visualization/)
* [Navigating The Green Book](http://publicdomain.nypl.org/greenbook-map/)
* [Neural Neighbors: Capturing Image Similarity
](http://dhlab.yale.edu/projects/neural-neighbors/)
* [PixPlot](http://dhlab.yale.edu/projects/pixplot/)
* [The Norwegian National Museum](http://vy.nasjonalmuseet.no/)
* [Identifying art through machine learning
](https://www.moma.org/calendar/exhibitions/history/identifying-art)
* [Teachable Machine](https://experiments.withgoogle.com/teachable-machine)
* [Pattern Radio: Whale Songs](https://experiments.withgoogle.com/patternradio)
* [Talk to Books](https://experiments.withgoogle.com/talk-to-books)
* [Semantris](https://research.google.com/semantris/)
* [Font Map](https://experiments.withgoogle.com/font-map)
* [The Infinite Drum Machine](https://experiments.withgoogle.com/drum-machine)
* [Bird Sounds](https://experiments.withgoogle.com/bird-sounds)
* [Boil the Frog](http://boilthefrog.playlistmachinery.com/)
* [Every Noise at Once](http://everynoise.com/engenremap.html)
* [X Degrees of Separation](https://artsexperiments.withgoogle.com/xdegrees/8gHu5Z5RF4BsNg/BgHD_Fxb-V_K3A)
* [NASA’s Visual Universe](https://artsexperiments.withgoogle.com/nasasvisualuniverse)
* [NASA’s Visual Universe](https://experiments.withgoogle.com/business-of-fashion)
* [Curator Table](https://artsexperiments.withgoogle.com/curatortable/#0.00,1607.63,4473.41,0.00,-1.00,0.00)

And more listed [here](https://www.are.na/seth-kranzler/design-and-machine-learning-references)


What is scripting?

* A scripting or script language is a programming language for a special run-time environment that automates the execution of tasks; the tasks could alternatively be executed one-by-one by a human operator. Scripting languages are often interpreted. - Wikipedia

Python is a scripting language that we will be using in this class. It is highly versatile, high-level, general-purpose programming language that is quickly becoming one of the most popular languages.

We covered the terminal in advance of Python (next class)

[Quick guide here](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

Import commands to be familiar with:
* pwd
* ls
* cd
* mkdir
* rmdir
* rm
* mv
* cp
* open .
* cat

Using the terminal, we installed [Homebrew](https://brew.sh/)

First, make sure you have Xcode command-line tools installed. Note - this is *not* the Xcode editor. These are separate tools that run from your command line. Run the commands below (without the `$` at the beginning of the line):

```console
$ xcode-select --install
```

Next, we install Homebrew by running the following command:

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Run the following command once you’re done to ensure Homebrew is installed and working properly:

```console
$ brew doctor
```

Next, we install Python 

```console
$ brew install python
```

Check your install with the following command

```console
$ python --version
```

It should say report a version of python 3 or higher