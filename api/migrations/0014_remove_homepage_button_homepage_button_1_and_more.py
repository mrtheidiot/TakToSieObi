# Generated by Django 4.0.4 on 2022-08-03 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_button_homepage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='button',
        ),
        migrations.AddField(
            model_name='homepage',
            name='button_1',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='button_1', to='api.button'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='button_2',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='button_2', to='api.button'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='button_3',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='button_3', to='api.button'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='content',
            field=models.TextField(),
        ),
    ]
