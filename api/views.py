from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from api.models import Button, Tutorial, HomePage
from api.serializers import TutorialSerializer, HomePageSerializer, ButtonSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def tutorial_list(request):
    if request.method == 'GET':
        tutorials = Tutorial.objects.all()
        
        title = request.query_params.get('title', None)
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title)
        
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        tutorial_serializer = TutorialSerializer(data=tutorial_data)
        if tutorial_serializer.is_valid():
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Tutorial.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def tutorial_detail(request, pk):
    try: 
        tutorial = Tutorial.objects.get(pk=pk) 
    except Tutorial.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        tutorial_serializer = TutorialSerializer(tutorial) 
        return JsonResponse(tutorial_serializer.data) 
 
    elif request.method == 'PUT': 
        tutorial_data = JSONParser().parse(request) 
        tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
        if tutorial_serializer.is_valid(): 
            tutorial_serializer.save() 
            return JsonResponse(tutorial_serializer.data) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        tutorial.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

##########################################################################################################################################
    # HomePage down there
##########################################################################################################################################


@api_view(['GET', 'POST', 'DELETE'])
def home_page_list(request):
    if request.method == 'GET':
        pages = HomePage.objects.all()
        
        # title = request.query_params.get('title', None)
        # if title is not None:
        #     tutorials = tutorials.filter(title__icontains=title)
        
        pages_serializer = HomePageSerializer(pages, many=True)
        return JsonResponse(pages_serializer.data, safe=False)
 
    elif request.method == 'POST':
        new_page_data = JSONParser().parse(request)
        pages_serializer = HomePageSerializer(data=new_page_data)
        if pages_serializer.is_valid():
            pages_serializer.save()
            return JsonResponse(pages_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(pages_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = HomePage.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def home_page_detail(request, pk):
    try: 
        page = HomePage.objects.get(pk=pk) 
    except HomePage.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        pages_serializer = HomePageSerializer(page) 
        return JsonResponse(pages_serializer.data) 
 
    elif request.method == 'PUT': 
        page_data = JSONParser().parse(request) 
        pages_serializer = HomePageSerializer(HomePage, data=page_data) 
        if pages_serializer.is_valid(): 
            pages_serializer.save() 
            return JsonResponse(pages_serializer.data) 
        return JsonResponse(pages_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        page.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def buttons_list(request):
    buttons = Button.objects.all()
    buttons_serializer = ButtonSerializer(buttons, many=True)
    return JsonResponse(buttons_serializer.data, safe=False)
 