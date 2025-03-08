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
### 顺序存储结构
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
### 链式存储结构
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
StackNode *init(){
    Stack *head = (StackNode *)malloc(sizeof(StackNode));
    if(head == NULL){
        fprintf(stderr, "分配内存失败");
        exit(1);
    }
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
    StackNode *node = creatStackNode();
    head->data = data;
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

队列和栈都是操作受限制的线性表，所以不是所有的线性表操作都可以在这两者上复现。如：随机存取。

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
#### 出队
```c
void outQueue(Queue *queue, int *x){
    if(queue == NULL || queue->front == queue->rear){
        return;
    } 
    (*x) = queue->data[queue->front--];
}
```
#### 销毁
```c
void destroyQueue(Queue *queue){
    free(queue);
}
```
### 循环队列
设想一种情况：一个队列总共有3个连续的空间可以进行存储，入队了2个元素然后出队了1个元素，再入队一个元素，之后如果再入队会发现队列已经满了，因为rear已经指向3了，但是实际上front指向1，在0处还有一个空余的空间没有使用，这种情况我们称为“假溢出”。

那这样的情况我们应该怎样解决呢？答案就是使用循环队列，这个循环是指在逻辑上循环，这样就可以充分地利用每一个空间了。

此时判断空的条件为：queue->front == queue->rear；判断满的条件也为：queue->front == queue->rear。

所以使用循环队列又引入了一个新的问题，怎样判断空和满？

常用的方法有三种：
- 牺牲一个存储单元：让rear在front后面一位时为**满**；让front和rear相同时为**空**，这样就可以进行区分了。队满条件：(queue->rear + 1) % MAX_SIZE == queue->front；队空条件：queue->front == queue->rear。
- 增加一个size数据成员：使用size表示队列中的数据元素个数，虽然**空**和**满**的判断条件依然相同，但是size可以提供是空还是满的依据，**size为0则为空，size为MAX_SIZE则为满。**
- 增加一个tag数据成员：入队成功设置tag为1，出队成功设置tag为0。若导致queue->front == queue->rear，我们可以检查tag的值，为1则表示队列满否则就是队列空。

![循环队列示意图](https://camo.githubusercontent.com/57035a19caeb07a2a7519a0a25781563db5d8083d166c154befca78ac97702b3/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313333393133373332302d37376333636134632d316264662d343865622d383764362d6130383161333934356331632e706e67)

使用循环队列对指针有以下操作：
- 添加元素：`queue->rear = (queue->rear + 1) % MAX_SIZE`;
- 删除元素：`queue->front = (queue->front + 1) % MAX_SIZE`;
- 求队列长度：`len = (queue->rear - queue->front + MAX_SIZE) % MAX_SIZE`;
### 队列的链式存储结构
采用链式存储就涉及到带与不带头结点了。
- 不带，则队首指针指向队首节点（第一个节点），队尾指针指向队尾节点（最后一个节点）。
- 带，则对首指针指向头结点，队尾指针指向队尾节点。

C语言实现的结构体为：
```c
typedef struct QueueNode{
    int data;
    struct QueueNode *next;
}QueueNode;

typedef struct LinkQueue{
    QueueNode *front, *rear;
}LinkQueue;
```
需要实现一个节点结构体和一个指针结构体。

采用头结点的形式在操作上更方便。因为在不采用头结点的情况下需要判断链表是否为空，为空怎样，不为空又怎样，而有头结点在不同的情况下可以进行统一的操作。

#### 初始化
```c
LinkQueue *init(){
    LinkQueue *queue = (LinkQueue *)malloc(sizeof(LinkQueue));
    //初始化头结点
    queue->front = queue->rear = (QueueNode *)malloc(sizeof(QueueNode));
    return queue; 
}
```
#### 判队空
```c
bool isEmpty(LinkQueue *queue){
    if(queue == NULL || queue->front == queue->rear){
        return true;
    }
    return false;
}
```
#### 入队
```c
void inQueue(int data, LinkQueue *queue){
    if(queue == NULL){
        return;
    }
    QueueNode *node = createNode(data);
    //在rear后插入node之后再进行移动rear指针
    queue->rear->next = node;
    queue->rear = node;
}
```
#### 出队
```c
bool outQueue(LinkQueue *queue, int *x){
    //一个节点都没有
    if(queue->front == queue->rear || queue == NULL){
        return false;
    }
    //p指向第一个元素节点
    QueueNode *p = queue->front->next;
    //得到元素值
    (*x) = p->data;
    //将p释放
    queue->front->next = p->next;
    //若只有一个节点
    if(p == queue->rear){
        p->rear = p->front;
    }
    free(p);
    return true;
}
```
### 双端队列
> 定义：允许两端都可以进行插入和删除操作的线性表。双端队列的两端地位是平等的。

![双端队列示意图](https://camo.githubusercontent.com/e8540222a901a4c2148a8d40c8b76d892128354038266d6d9a0247f3222da9c1/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313430303239333535342d36653731383161382d326265332d343166632d393630612d6666646430353531343235652e706e67)

这个知识点考题就是叫我们判断序列，通常自己模拟一遍就行了。
## 栈和队列的应用
### 栈在括号匹配中的应用

### 栈在表达式中的应用

### 栈在递归中的应用

### 队列在层次遍历中的应用

### 队列在计算机中的运用

## 数组和特殊矩阵
矩阵在计算机图形学中具有非常重的地位并且计算机存储资源也非常宝贵，所以我们研究怎样使用最小的内存空间来存储同样一组数据（也是数据结构存在的作用）。

故这里我们要研究怎样使用最小的空间将一个矩阵存储。
### 数组的定义
> 定义：由n($n >= 1$)个相同类型的数据元素构成的有限序列。

其中每个数据元素称为一个**数组元素**，每个元素在n个线性关系中的下标称为该元素的下标，下标的取值范围称为数组的维界

**数组一旦被定义是不能改变的。因此，除结构的初始化和销毁外，数组只会有存放元素和修改元素的操作！**
### 数组的存储结构
数组是一段连续的存储空间。

因为是连续的，所以我们可以轻松地获取任意一个位置上的元素，也可以轻松地得到对应的地址。

如：一个一维数组 a[0...n-1] 其存储结构关系为：

LOC($a_{ij}$) = LOC($a_0$) + i x L (0 <= i < n)

上面的i为要求元素的下标，L为一个数组元素所占的存储单元。
### 矩阵的压缩
:::tip 说明
学过**离散数学**这本书就知道二维数组是可以表示矩阵的，当然没学过这里也就知道了。

**我们这里的任务就是怎样将一个二维数组映射为一个一维数组并且让一维数组使用尽量少的存储空间。**

而使用二维数组表示矩阵时有着两种优先形式，分别是**按行优先存储**和**按列存储**。

这里使用按行有限存储举例：将二维数组一行一行地映射到一维数组中，一行映射完了才能进行下一行的映射。
:::

压缩的含义就是舍去多余的数据，只保留必要的数据；有几种特殊矩阵的压缩方法是需要我们学习的。

- **对称矩阵**
上三角和下三角的值完全相同则为一个对称矩阵，其具有$a_{ij} = a_{ji}$的特点。
![对称三角示意图](https://camo.githubusercontent.com/843e800594d0544291313339e2cb67a784e7374f550c307e1b82449c0ddd7597/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313335363635393439392d38316163343135632d356164322d343034612d383132652d3166663339383366653236312e706e67)
我们想一下，在一个**n x n**的矩阵中，上三角和下三角的元素都进行存储，那么我们会使用$n^2$个连续的存储单元，而全部存储真的有必要吗？显然是不必要的，我们只需要存储对角线上的元素和一侧的元素。（因为另一半一样故不用重复存储）
那现在存储这样的矩阵需要多少个连续的存储单元呢？我们使用前n项和公式计算一下就知道为 **$\frac {n(n + 1)}{2}$**。
- **三角矩阵**
1. 上三角矩阵：下三角的元素为同一常量。

2. 下三角矩阵：上三角的元素为同一常量。

![三角矩阵示意图](https://camo.githubusercontent.com/eb8bcf59488728cd2afa387f630e6e09903e6df63c3eeaa9a159a2831cffa499/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313430323838363536322d63323232393139652d313831632d343737302d623037342d3263636334353262376539352e706e67)

可以看出这个和对称矩阵类似但不相同，除了存储对角线和一半的元素还需要一个额外的存储单元用来存储一侧相同的元素。故需要大小为 **$\frac {n(n + 1)}{2} + 1$** 的连续存储单元。
- **三对角矩阵**
> 定义：对n阶矩阵A中的任意一个元素$a_{ij}$，当$|i - j| > 1$时有$a_{ij} = 0$($i \geq 1，n \geq j$)，则称为三对角矩阵。

这个也称为**带状矩阵**，我倒是觉得这个名称更适合它，因为它的形状就像一条海带！

如下：

![三对角矩阵示意图](https://camo.githubusercontent.com/863d0117601c88d9535d460aec2ea91619c9a8ae42941d9b6155d3e9f293c01a/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313430333430333031312d39373637366166342d326565622d343531392d386435322d3962393137626433653734302e706e67)

这个也可以采用行优先方式存放在一位数组中。
- **稀疏矩阵**
> 定义：矩阵中元素的个数远远大于非零元素的个数。

此时只用存储非零元素，但是其分布是无序的呀，所以除了要存储非零元素的值还要存储该元素对应的**行和列**。

元素的值、行、列共同构成一个三元组，然后按照某种规律存储这些三元组线性表。**稀疏矩阵压缩存储后就失去了随机存取特性**（因为元素在矩阵中就是无序的）

稀疏矩阵的三元组表可以采用数组存储也可以采用十字链表存储。**在存储三元组表时，不仅仅需要存储该三元组表还要存储非零元素的个数。**