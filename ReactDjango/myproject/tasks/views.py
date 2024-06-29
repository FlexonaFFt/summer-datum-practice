#type: ignore
from django.http import JsonResponse
from .models import Task

def task_list(request):
    tasks = Task.objects.all()
    tasks_list = [{"id": task.id, "title": task.title, "completed": task.completed} for task in tasks]
    return JsonResponse(tasks_list, safe=False)
