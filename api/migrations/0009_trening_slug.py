# Generated by Django 4.0 on 2022-02-01 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_trening_description_alter_trening_description2'),
    ]

    operations = [
        migrations.AddField(
            model_name='trening',
            name='slug',
            field=models.SlugField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
