# Generated by Django 4.1.7 on 2023-02-15 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu_items', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuitem',
            name='img',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='menuitem',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=5),
        ),
    ]
