---
title: 串
categories:
  - "408"
  - "数据结构"
  - "串"
icon: paper-plane
---
## 串的定义
> 定义：由零个或多个字符组成的有限序列。

记为：S = '$a_1a_2...a_n$'  ($n \geq 1$)  

S是串的名称，其中字符个数称为串的长度。当n = 0时，称其为**空串**。

串中任意多个连续的子序列称为该串的**子串**。包含这个子串的字符串称为**主串**。子串在主串中的位置是子串与主串相同时子串第一个字符在主串中的位置。

如：主串"I AM A PIG"中有个子串"PIG"，子串的位置是8，空格也是需要加入计算的。

通常来说串的基本操作是以子串作为操作对象的，这一点和线性表有着不同。
## 串的基本操作
- strCopy(char *string, char *data)：将data的字符串复制给string
- subString(char *string, char *data, int start, int len)：使用string返回data中从start开始长度为len的子串
- strLength(char *string)：返回string的长度
- index(char *s, char *t)：定位，若s中存在t则返回t的位置，否则返回0
- contact(char *s, char *t, char *m)：连接，将t和m连接起来使用s返回
- strCompare(char *s, char *t)：比较字符串，s大于t则返回1，s=t返回0，s小于t返回-1
- clear(char *s)：将s中的字符全部清除，使其变为空串

根据上面的基本操作可以构建更复杂更强大的功能。
## 串的存储结构
### 顺序存储结构
C语言结构体为：
```c
typedef struct String{
    char data[MAX_SIZE];
    int length;    
}
```
使用这种需要额外添加一个length，用于存储字符串的长度用以避免使用循环获取，其长度是固定的在声明之后无法进行修改长度。

如果添加的字符串长度大于MAX_SIZE就会发生**截断**。并且串长可以有两种表示方式，一就是上面的那种使用length记录，二是在字符串最后添加一个'\0'，这个是不计入串长的，所以导致获取长度时要遍历。
### 堆存储结构
和之前学习的的链表一样，为了解决“固定”的问题。
### 块链存储结构

## 串的模式匹配
### 简单模式匹配

### KMP算法

### KMP算法的优化