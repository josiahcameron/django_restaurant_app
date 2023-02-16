from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    #Needs to be URL Field
    img = models.URLField(null=True)
    type = models.CharField(null=True, max_length=255)

    def __str__(self):
        return self.name

