from django.contrib.auth.models import User
from rest_framework import serializers

from api.models import Contact

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class ContactSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Contact
        fields = '__all__'

