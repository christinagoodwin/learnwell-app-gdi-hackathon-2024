# Generated by Django 5.1.3 on 2024-11-16 07:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Break_Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Study_plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_duration', models.TimeField()),
                ('session_duration', models.TimeField()),
                ('break_duration', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User_entitiy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=15)),
                ('preferences', models.TextField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Study_session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('status', models.CharField(max_length=10)),
                ('focus_level', models.IntegerField()),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_functionality.study_plan')),
            ],
        ),
        migrations.AddField(
            model_name='study_plan',
            name='topic',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_functionality.topic'),
        ),
        migrations.AddField(
            model_name='topic',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_functionality.user_entitiy'),
        ),
        migrations.AddField(
            model_name='study_plan',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_functionality.user_entitiy'),
        ),
    ]
