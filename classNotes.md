"""
pyplot intro
"""

import matplotlib.pyplot as plt
import random

class Coin(object):
  def toss(self):
    r = random.choice([1, -1])
    return r

def main():
  C = Coin()
  C.toss()

class Brownian():


main():
  #C = Coin()
  #C.toss()
  B = Brownian(0, 10) # Brownian(seed value, number of tosses)
  B.generate_motion()
  B.plot