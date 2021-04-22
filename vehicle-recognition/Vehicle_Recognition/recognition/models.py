# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class CarDetails(models.Model):
    name = models.CharField(db_column='Name', primary_key=True, max_length=100)  # Field name made lowercase.
    price = models.BigIntegerField(db_column='Price', blank=True, null=True)  # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=100, blank=True, null=True)  # Field name made lowercase.
    company = models.CharField(db_column='Company', max_length=100, blank=True, null=True)  # Field name made lowercase.
    engine = models.CharField(db_column='Engine', max_length=100, blank=True, null=True)  # Field name made lowercase.
    seater = models.IntegerField(db_column='Seater', blank=True, null=True)  # Field name made lowercase.
    gear = models.CharField(db_column='Gear', max_length=100, blank=True, null=True)  # Field name made lowercase.
    fuel = models.CharField(db_column='Fuel', max_length=100, blank=True, null=True)  # Field name made lowercase.
    country = models.CharField(db_column='Country', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'car_details'
