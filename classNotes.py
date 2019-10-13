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
  x = 0
  y = 0
  U = [] # 'List' of coin tosses
  V = [] # 'List' of partial sums

  def __init__(self, seed_val, num_of_tosses):
      # Set objects properties
      self.seed = seed_value
      self.tn = num_of_tosses
      Coin.__init__(self)

  def generate_motion(self):
    self.U.append(X)
    self.y = self.seed
    self.V.append(self.y)
    for i in range(1, self.tn):
      r = self.toss()
      self.x = i
      self.y += r
      self.U.append(self.x)
      self.V.append(self.y)
    return self.U, self.V

  def plot(self):
      """
      'b-' solid blue line
      'ro' solid red circles
      'g--' green dashed line
      'k.' black dotted line
      """
      plt.plot(self.U, self.V, 'r-')
      plt.ylim(min(self.V), max(self.V))
      plt.legend(['Brownian Motion'])
      plt.xlabel('x-axis: # Coin Tosses')
      plt.ylabel('y-axis: Partial Sum After Toss')

main():
  #C = Coin()
  #C.toss()
  B = Brownian(0, 10) # Brownian(seed value, number of tosses)
  B.generate_motion()
  B.plot