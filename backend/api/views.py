from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EnquirySerializer

from rest_framework import status

@api_view(['POST'])
def enquiry(request):
    serializer = EnquirySerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Submitted successfully"}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)