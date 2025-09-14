import matplotlib.pyplot as plt
import numpy as np


x = np.linspace(0, 10, 100)  # 100 points entre 0 et 10

# Données pour l'axe des y (par exemple, une fonction sinus)
y = np.sin(x)

# Tracer la courbe
plt.plot(x, y, label='sin(x)')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.title('Courbe de la fonction sinus')
plt.legend()
plt.grid(True)
plt.show()


