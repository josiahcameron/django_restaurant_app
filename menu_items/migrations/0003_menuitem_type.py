# Generated by Django 4.1.7 on 2023-02-15 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu_items', '0002_menuitem_img_menuitem_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuitem',
            name='type',
            field=models.CharField(max_length=255, null=True),
        ),
    ]