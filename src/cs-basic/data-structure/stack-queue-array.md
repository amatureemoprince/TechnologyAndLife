---
title: 栈、队列和数组
icon: hands-bubbles
categories:
  - "408"
  - "数据结构"
  - "栈、队列、数组"
---
## 栈
> 定义：只允许在一端进行插入或删除操作的线性表。

我们要明白**栈**也是一种**线性表**，但是一端被限制了操作，其具有**先进后出**的特性。

![示意图](https://camo.githubusercontent.com/bf726c3e9b289d532c43ec756e145c31b661b44619c6527f6719d51d3895e84d/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313331363033323730312d35316632356230612d393565342d343366352d623936652d3364393537383330386161312e706e67)
我们需要知道的几个概念：
- 栈顶：线性表允许进行插入和删除操作的一端。
- 栈底：固定的，不允许进行插入和删除的一端。
- 空栈：不含有任何元素的空表。
  
栈有个重要的数学性质：**当有 n 个不同元素入栈时，出栈元素的不同排列个数有$\frac{1}{n + 1} \binom{2n}{n}$个。**
### 栈的常见操作
- 初始化：initStack()
- 入栈：push(Stack *stack, int data)
- 出栈：pop(Stack *stack, int *x)
- 销毁：destroyStack(Stack *stack)
### 顺序表的实现方式
使用一组地址连续的存储单元存放从栈底到栈顶的数据元素并且使用一个top指针指向当前栈顶元素。

使用C语言定义的结构体为：
```c
typedef struct Stack{
    int data[MAX_SIZE];
    int top;
}Stack;
```
栈中的top在初始化时可以根据不同的需要初始化为不同的值，常见的有-1和0。在做题时需要小心top的初始化值，在不同的情况下，入栈和出栈的代码有些许不同。

##### - 初始化栈
我们将top初始化为-1。
```c
Stack *initStack(){
    Stack *stack = (Stack *)malloc(sizeof(Stack));
    if(stack == NULL){
        fprintf(stderr, "分配给栈的内存出错");
        exit(1);
    }
    stack->top = -1;
    return stack;
}
```
##### - 入栈
因为top初始化为-1，所以需要先将top加一才能赋值。如果这里top初始化为0呢？那当然可以直接赋值然后再进行加一咯。
```c
void push(Stack *stack, int data){
    if(stack->top == MAX_SIZE - 1){
        return;
    }
    stack->data[++(stack->top)] = data;
}
```
##### - 出栈
将栈顶的元素赋值给x并将top减一。
```c
void pop(Stack *stack, int *x){
    if(stack->top == -1){
        return;
    }
    *x = stack->data[(stack-top)--];
}
```
### 共享栈
依旧保持住栈底不变的特性。此时是让两个栈共享一个一维数组，如：一个arr[10]数组，栈1的top为-1，栈2的top为10，每次入栈，两个栈的栈顶就靠得更近了。
![共享栈示意图](https://camo.githubusercontent.com/02750d0eb7d42277ed57988d87d894d12e522052a7a56cc407b45fa85441946a/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313331363637373735322d38343434646234652d336665312d343065322d386665312d6231396231303239333464372e706e67)

这种方式可以更好地利用存储空间，只有在整个存储空间被占满的情况下才会发生溢出。
### 链表的实现方式
我们采用单链表来实现栈。采用**不带有头结点**的单链表并且所有操作都在表头进行。（也可以采用带有头结点的，只不过操作有些不同）

C语言的结构体为：
```c
typedef struct StackNode{
    int data;
    struct StackNode *next;
}StackNode;
```
#### 初始化
```c
StackNode *init(int data){
    Stack *head = (StackNode *)malloc(sizeof(StackNode));
    if(head == NULL){
        fprintf(stderr, "分配内存失败");
        exit(1);
    }
    head->data = data;
    head->next = NULL;
    return head;
}
```
#### 入栈
```c
void insert(StackNode *head, int data){
    if(head == NULL){
        return;
    }
    StackNode *node = creatStackNode(data);
    node->next = head->next;
    head->next = node;
}
```
#### 出栈
```c
void delete(StackNode *head, int *x){
    if(head == NULL){
        return;
    }
    (*x) = head->data;
    head = head->next;
}
```
## 队列
> 定义：只允许在表的一端进行插入，在表的另一端进行删除。

这也是一种操作受限的线性表，其具有**先进先出**的特性。

![队列示意图](https://camo.githubusercontent.com/df42996c40152e543b67f8490e6852827bf01c174b0feac78f10abe0fd15d416/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313332393832343835382d39666331653866312d646461362d346562342d386533332d3865386462643639393335322e706e67)

需要知道几个概念：
- 队首：进行删除的一端。
- 队尾：进行插入的一端。
- 空队列：不含有任何元素的空表。

### 队列的常见操作
- 初始化：initQueue()
- 入队：inQueue()
- 出队：outQueue()
- 销毁：destroyQueue()

### 队列顺序存储结构
使用连续的存储单元存放队列中的元素，并需要设置两个指针。分别为**队首指针：front，指向队首元素；队尾指针：rear，指向队尾元素的下一个位置。**
:::tip 注意
front和rear指针的指向可以和这里的不同，具体的做法根据题目中的描述进行。
:::
队列和栈都是操作受限制的线性表，所以不是所有的线性表操作都可以在这两者上复现。如：随机存取。

设想一种情况：一个队列总共有3个连续的空间可以进行存储，入队了2个元素然后出队了1个元素，再入队一个元素，之后如果再入队会发现队列已经满了，因为rear已经指向3了，但是实际上front指向1，在0处还有一个空余的空间没有使用，这种情况我们称为“假溢出”。

那这样的情况我们应该怎样解决呢？答案就是使用循环队列，这个循环是指在逻辑上循环，这样就可以充分地利用每一个空间了。

此时判断空的条件为：queue->front == queue->rear；判断满的条件也为：queue->front == queue->rear。

所以使用循环队列又引入了一个新的问题，怎样判断空和满？

常用的方法有三种：
- 牺牲一个存储单元：让rear在front后面一位时为**满**；让front和rear相同时为**空**，这样就可以进行区分了。队满条件：(queue->rear + 1) % MAX_SIZE == queue->front；队空条件：queue->front == queue->rear。
- 增加一个size数据成员：使用size表示队列中的数据元素个数，虽然**空**和**满**的判断条件依然相同，但是size可以提供是空还是满的依据，**size为0则为空，size为MAX_SIZE则为满。**
- 增加一个tag数据成员：

C语言实现的结构体为：
```c
typedef struct Queue{
    int data[MAX_SIZE];
    int front;
    int rear;
}Queue;
```
#### 初始化
```c
Queue *init(){
    Queue *queue = (Queue *)malloc(sizeof(Queue));
    if(queue == NULL){
        fprintf(stderr, "分配内存失败");
        exit(1);
    }
    queue.front = 0;
    queue.rear = 0;
    return queue;
}
```
#### 入队
```c
void inQueue(Queue *queue, int data){
    if(queue == NULL || queue->front == MAX_SIZE){
        return;
    } 
    queue->data[queue->rear++] = data;
}
```

### 队列的链式存储结构

### 循环队列

## 栈和队列的应用

## 数组和特殊矩阵
### 数组的定义
> 定义：

### 数组的存储结构

### 矩阵的压缩
1. 对称矩阵

2. 三角矩阵

3. 对三角矩阵