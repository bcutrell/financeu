import Quandl
import pandas as pd
import numpy as np

data = Quandl.get('GOOG/NYSE_IBM', collapse='weekly')
print data.head()

