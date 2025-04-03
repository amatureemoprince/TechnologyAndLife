---
title: 查找算法
icon: magnifying-glass
categories:
  - "408"
  - "算法"
  - "查找算法"
---

下面代码和示例都默认使用整数类型。

------

## 查找的概念

**查找**：在数据集合中寻找满足某种条件的数据元素的过程称为查找。

查找的结果只能有两种，分别为**查找成功**和**查找失败**，前者表示在查找表中寻找到了满足条件的元素，后者表示没有在查找表中寻找到满足条件的元素。

这里出现的**查找表**就是**用于查找的数据集合**，其由同一类型的元素组成。

查找表有两种分类分别为：

- 静态查找表：对查找表只有查找操作，不存在修改元素的操作。
- 动态查找表：对查找表有动态地插入和删除。

适合静态查找表的查找算法有：折半查找、顺序查找、散列查找等。

适合动态查找表的查找算法有：二叉排序树的查找、散列查找等。

适合静态和动态查找表中都存在散列查找，这是因为其有个**装载因子**的概念，当某刻的装填因子大于规定的阈值时，会对散列表进行扩容操作！

我们查找是根据关键字来进行查找的，那什么是关键字呢？

**关键字**：数据元素中唯一标识该元素的某个数据项的值。

举个例子：以全体中国人做例子，什么数据项可以作为一个中国人的唯一标识呀？肯定就是身份证号撒。没错，身份证号就可以作为查找某个人的关键字！

在查找算法这节中，有个**评判查找算法效率的重要指标**，这节的重点也是它！它就是**平均查找长度**。

**平均查找长度**：在查找过程中，一次查找的长度是指一次查找某个元素需要比较的关键字次数，而平均查找长度则是所有查找过程中进行关键字比较次数的平均次数。

其数学定义式为：

![img](https://cdn.nlark.com/yuque/__latex/e0103d33dfc7fe71ca16501ef30d2919.svg)

查找表的长度为 n， 在上面![img](https://cdn.nlark.com/yuque/__latex/60b7f8a498a516989cfb2315f66209ec.svg)的公式中，![img](https://cdn.nlark.com/yuque/__latex/282ff0c1015821da5017765ed7c1e43c.svg)表示查找第 i 个数据元素的概率，通常认为每个元素的查找概率相同，即![img](https://cdn.nlark.com/yuque/__latex/6d0fe423fb8807f16cd53865b40f7df7.svg)，![img](https://cdn.nlark.com/yuque/__latex/b3e446f65eb8aeac98b741ad30fcea2e.svg)是找到第 i 个元素需要进行比较的次数。

------

## 顺序查找

该查找算法又被称为“线性查找”，这个名字和之前学习的顺序存储很类似，其实其在逻辑上也是类似的。

和这个算法的名字一样“顺序（线性）”，就是从一侧到另一侧依次的查找呗！如果找到满足条件的元素则返回对应的索引，否则返回查找失败的信息，一般而言返回-1，因为索引是从 0 开始的。

```c
void sequential_search(int *arr, int val, int len){
    for(int i = 0; i < len; i++){
        if(arr[i] == val){
            return i;
        }
    }
    return -1;
}
```

在王道书上提到了一个哨兵，其实就是牺牲一个单位空间来替代 if 判断，这样就只需要从后往前遍历，直接返回 val 的 index 则可。其实原理都是一样的，无需纠结。

------

平均查找长度：

查找成功：在查找表长度为 n 的情况下，查找 val 到与第 i 个元素相同时，因为有 n 个元素，故![img](https://cdn.nlark.com/yuque/__latex/6d0fe423fb8807f16cd53865b40f7df7.svg)，比较次数![img](https://cdn.nlark.com/yuque/__latex/475deef5404d77187e448ff8ddd324ed.svg)，故有：

![img](https://cdn.nlark.com/yuque/__latex/f51e2121b22eebe4a5238d1f228bbb52.svg)

查找失败：因为查找失败只能有一次，就是遍历完所有元素都不满足条件，需要比较 n 次，故有：

![img](https://cdn.nlark.com/yuque/__latex/4befdf8673a154ed660ab91b6b83c760.svg)

王道书上的![img](https://cdn.nlark.com/yuque/__latex/c3cabf9815a3d9963d5a53b0295c85af.svg)的原因是使用了“哨兵”，有 n 个元素再加上一个“哨兵”，故需要比较 n+1 次。

顺序查找的优缺点：

- 优点：对数据的存储形式没有要求，既可以是**顺序存储**又可以是**链式存储**，对查找表中记录的有序性也没有要求，有序无序都可以使用该算法。
- 缺点：当查找表中的元素个数 n 较大时，其平均查找长度较大，效率较低。

**在这里查找每个元素的概率都是相同的，但是实际情况中更多的是概率不同，所以在遇到具体的问题还需要具体的分析！**

------

上面的顺序查找是在查找表中关键字无序情况下进行的，所以查找需要遍历整个查找表。

只要使查找表中的关键字有序，则可以进行优化，提前结束遍历！

```c
int sequential_better_search(int *arr, int val, int len) {
    if (len == 0 || val < arr[0] || val > arr[len - 1]) {
        return -1;  // 快速失败
    }
    for (int i = 0; i < len; i++) {
        if (arr[i] == val) {
            return i;
        }
        if (i < len - 1 && arr[i] < val && arr[i + 1] > val) {
            break;  // 提前终止
        }
    }
    return -1;
}
```

------

可以使用一颗判定树来描述有序线性表的查找过程。

**判断树**：是一种用于描述查找算法执行过程的二叉树，其中每个节点代表一次**关键字的比较操作**，分支代表比较结果（左分支为“小于”，右分支为“大于”或“等于”），叶子节点代表查找的成功或失败。
对于有序线性表的查找（如顺序查找、折半查找），判定树可以直观展示所有可能的查找路径和比较次数。

现在将对一个有序表进行查找，其形成的判定树如下：其中圆形结点表示有序表中存在的元素，矩形结点表示失败结点，其描述为不在表中数据值的集合。若找到了矩形结点则说明查找失败！

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743515983653-08346e79-982b-42d5-8eea-1ecca15f956b.jpeg)

由此可知，有序序列中的 n 个元素会将整个关键字区间划分为 n+1 个子区间，故矩形结点必有 n+1 个！

平均查找长度：

查找成功：此时查找成功和没有优化的顺序查找一样。故有：

![img](https://cdn.nlark.com/yuque/__latex/f51e2121b22eebe4a5238d1f228bbb52.svg)

查找失败：因为矩形结点是虚拟的，故并不用对其进行比较，所以比较次数等于其上面的一个圆形结点的层数，查找不成功的平均长度在相等查找概率下有：

![img](https://cdn.nlark.com/yuque/__latex/8619a6152843b1dc8c1df14e0d4bf3c8.svg)

只要牢记 ASL 的定义，就不会出现问题！

------

## 折半查找

折半查找又被称为“二分查找”。要使用折半查找的话，对应的查找表必须是**有序（在这里升序）**的！

核心思想是：比较要查找的元素 val 和查找表的中间元素，若小于则到左侧寻找，若大于则到右侧寻找，往后的查找都使用这种方式进行。**在取中间元素时，既可以向下取整又可以向上取整，但在每次查找过程中要相同，这在做题时需要注意**。

这样的话，每比较一次就可以缩小一半的查找范围，十分的高效。

```c
int half_search(int *arr, int val, int len){
    //因为是有序的，首先过滤一遍val
    if(val < arr[0] || val > arr[len - 1] || len == 0){
        return -1;
    }
    //区间可以为[low, high]或者[low, high)，这两者实现的代码有些许不同
    int low = 0;
    int high = len - 1;
    while(low <= high){
        //避免溢出
        int mid = low + (high - low) / 2;
        if(arr[mid] < val){
            low = mid + 1;
        }
        if(arr[mid] > val){
            high = mid - 1;
        }
        if(arr[mid] == val){
            return mid;
        }
    }
    return -1;
}
```

在使用折半查找时，查找表要满足**随机存取和有序**的特性！故只有顺序存储的有序线性表可以使用，而链式存储的线性表不行。

------

该算法的**判定树**如下：

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743553658951-64fe98d9-a860-4914-bce6-d0292fb4cfee.jpeg)

根据判定树进行分析 ASL：

**可知判定次数一定不会超过该判定树的高！**

在有序表中有 n 个元素和等概率的条件下，有：

![img](https://cdn.nlark.com/yuque/__latex/7974c5becc851c07498098fe376d9dbd.svg)

![img](https://cdn.nlark.com/yuque/__latex/44ae2cd43544c32bdf1d4e4112aaf5ff.svg)

其中，h 为树的高度。有 n 个元素的二叉树高为![img](https://cdn.nlark.com/yuque/__latex/087934cfc0c944281f7961a06ec64c91.svg)，故折半查找的时间复杂度为：![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)。

对于查找失败和查找成功的 ASL 需要根据的情况进行计算：

举个上面判定树中的例子说明：

![img](https://cdn.nlark.com/yuque/__latex/5d1bcfa5e4c17686c70a19ca62094c46.svg)

![img](https://cdn.nlark.com/yuque/__latex/11a20c4770780ca3d1a652a18a7b4373.svg)

所以在计算 ASL 时可以将其判定树画出来，问题就可以轻松解决了！

------

## 分块查找

分块查找又被称为“索引顺序查找”。该算法吸收了折半查找和顺序查找各自的优点！**既有动态结构又可以快速查找**。

核心思想是：将查找表分为若干个子块，块内元素可以无序，但块间元素是有序的，即前一个块中的最大关键字小于后一个块中的最小关键字，建立一个索引表，其中存储着每个块的开始索引和对应块中的最大元素。在查找过程中，首先根据索引表查找到对应的块，然后在块中进行顺序查找或折半查找。

------

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743555894582-0b512579-dc43-4171-8946-779d008426fa.jpeg)

分块查找的平均查找长度为**索引查找和块内查找的平均查找长度之和**                   

设：索引查找和块内查找的平均查找长度分别为![img](https://cdn.nlark.com/yuque/__latex/daa0521f3a59730abd3a2cbcd6101576.svg)。

则有：

![img](https://cdn.nlark.com/yuque/__latex/2a53672f3b51de6e90b890e878b30341.svg)

我们将这个公式再进行展开：

如果将长度为 n 的查找表分为 b 块，每块有 s 个记录，则有：

![img](https://cdn.nlark.com/yuque/__latex/3b0df814ee9a55084a1cb8fd12b58e57.svg)

根据均值不等式可知：当![img](https://cdn.nlark.com/yuque/__latex/5b951166ca34b3af6c4e9a3da9cc03fc.svg)时，有：![img](https://cdn.nlark.com/yuque/__latex/034cb7d8bae5d396d5230a477bf17e04.svg)。

虽然索引表会使用额外的存储空间，但是为其带来了效率上的提升，这是典型的**空间换时间**！

------

## 树形查找

树形查找：是一种基于树形数据结构实现的查找算法，它利用树的分层特性将数据组织成具有层次关系的结构，从而大幅提升查找效率（尤其是动态数据的查找、插入和删除操作）。

------

### 二叉排序树（BST）

BST 存在的意义是什么？不可能平白无故地构造一个 BST 吧！我们思考一下，在之前的顺序查找过程中是属于线性的，可以归结为“一条路走到黑”，而在折半查找过程中因为每次从中间元素比较，可以构造为一颗二叉判定树，其时间复杂度被优化为![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)，但是折半查找要的是查找表关键字有序，那我们可以不可以思考一下怎样可以让一个无序的查找表时间复杂度也可以被优化成![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)呢？

没错，救赎之道就在这里——BST！

构造一颗 BST，就可以提高查找、删除、插入关键字的效率，而且不管这个查找表中的关键字是有序还是无序，只要构造为了一颗 BST，一切就好起来了。

------

**BST 的定义**：

又被称为二叉查找树，其可以是一颗空树或者具有一下特征的二叉树：

- 若左子树非空，则左子树上所有结点的值都小于根结点的值。
- 若右子树非空，则右子树上所有结点的值都大于根结点的值。
- 左、右子树也分别是一颗 BST。

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743562715439-e846b403-d8f8-47e3-8574-14053697a66a.jpeg)

因为左子树的结点值<根结点值<右子树结点值，故若使用中序遍历一颗 BST 可以得到一个递增的有序序列！

------

**BST 的查找**：
因为可以视为二叉树的查找且有目标性（直到从左子树还是从右子树进行查找），可以利用递归！也可以使用迭代，在这里使用递归，因为代码简单。

```c
//定义结构体
typedef struct bst_tree_node {
    int data;
    struct bst_tree_node *left_child, *right_child;
}BST_TREE_NODE;

BST_TREE_NODE *bst_search(BST_TREE_NODE *root, int val) {
    if (root == NULL) {
        return NULL;
    }
    if (val < root->data) {
        return bst_search(root->left_child, val);
    }
    if (val > root->data) {
        return bst_search(root->right_child, val);
    }
    if (val == root->data) {
        return root;
    }
}
```

在 BST 中进行查找，显然比较次数不会超过树高，和折半查找类似，但是这个树高是不能确定的！若查找表中的元素非常合适，构造的 BST 为一颗近似于完全二叉树的形式，则其时间复杂度显然为：![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)，但是在某些时候，给定的查找表元素会让 BST 退化为一条链表形式，此时时间复杂度为：![img](https://cdn.nlark.com/yuque/__latex/e65a67ac353abeeff44c359310d05c02.svg)。前者的平均查找成功长度和 ![img](https://cdn.nlark.com/yuque/__latex/3c27b30a971bc5e9f6eb5d61efe17846.svg)成比例，后者的平均查找成功长度和顺序查找的一样为![img](https://cdn.nlark.com/yuque/__latex/935db81b0307b34fef4e68aee29c0598.svg)。

在具体的计算中可以构建好 BST 树然后根据定义进行计算则可。

------

**BST 的插入**：

BST 是一颗“动态”的二叉树，其特点是树形结构不是一次性形成的，而是在寻找的过程中，若树中不存在满足条件的关键字时，将该关键字插入到合适的位置。

插入的过程是：如果根为空，则直接插入；否则，给定关键字小于根结点值则插入到左子树，给定关键字大于根结点值则插入右子树，新插入的结点一定是**叶子结点**。

以下是递归和迭代实现方式。

```c
void insert_bst(BST_TREE_NODE **root, BST_TREE_NODE *node) {
    if (node == NULL)
		return;
    if (*root == NULL) {
        *root = node;
        return;
    }
    BST_TREE_NODE *current = *root;
    while (1) {
        if (node->data < current->data) {
            if (current->left_child == NULL) {
                current->left_child = node;
                break;
            }
            current = current->left_child;
        } else if (node->data > current->data) {
            if (current->right_child == NULL) {
                current->right_child = node;
                break;
            }
            current = current->right_child;
        } else {
			//已存在时，释放要插入的元素
            free(node);
            break;
        }
    }
}
void insert_bst(BST_TREE_NODE **root, BST_TREE_NODE *node){
	if(node == NULL){
		return ;
	}
	if(*root == NULL){
		*root = node;
		return ;
	}
	if(val < (*root)->data){
		insert_bst(&((*root)->left_child), node);
	}else if(val > (*root)->data){
		insert_bst(&((*root)->right_child), node);
	}else{
		free(node);
	}
}
```

------

**BST 的构造**：

将一个查找表中的元素构造为一颗 BST 不外乎就是一直向 BST 根结点中插入元素。

```c
void build_bst(BST_TREE_NODE **root, BST_TREE_NODE **nodes, int len) {
    *root = NULL;
    for (int i = 0; i < len; i++) {
        insert_bst(root, nodes[i]);
    }
}
```

相信理解了 BST 的插入和寻找，这个是非常容易理解的！

------

**BST 的删除**：

在删除了某个结点后不是笼统的将其和子树结点一起删除，而是只删除该结点并使 BST 保持原本的性质。

在这里就会出现 3 种情况了：

- 删除叶子结点：直接删除则可，并不会影响任何东西，这是最爽的😛。
- 删除的结点只有一颗子树（不管是左还是右，反正只有一颗）：那么在删除了该结点后要将子树的根结点补上。
- 删除的结构有两颗子树：在删除该结点后使用该结点中序遍历序列的直接前驱或者直接后继补上，这样就可以转换为前两种情况了！

因为一个根结点的直接前驱会跑到左子树的最右侧的节点，必为上面的两种情况之一，同理，直接后继也是这样的情况。

前两种情况较为简单，则只举第三种情况的例子。

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743593876122-c0fbb686-4256-4f23-bfa6-cedf4a5fa229.jpeg)

### 平衡二叉树（AVL）

BST 在某些时候会退化为链表，故引入平衡二叉树，避免出现这种情况。

**AVL**：可以是一颗空树或者满足以下性质的二叉树：

- 平衡二叉树的左右子树也是一颗平衡二叉树
- 左右子树的高度只差不超过 1，也就是![img](https://cdn.nlark.com/yuque/__latex/d953344da538511df54023a1878976a6.svg)
- AVL 中结点值关系和 BST 一致（左小、根中、右大）

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743594427250-67f82241-8db4-493c-9ccd-02e661469cda.jpeg)

每个结点中的数值就为该结点的平衡因子（左右子树高度之差）。

------

**AVL 的插入**：

AVL 的性质比 BST 的严格多了，所以在插入结点后被破坏了性质而进行的操作也比 BST 的操作复杂许多！

会涉及到 RR、LL、RL、LR 这四种操作。下面一一来说明什么情况下使用什么操作。

------

AVL 插入的过程：先和 BST 一样，找到合适的位置插入，但是这个插入可能会导致**平衡因子**的绝对值大于 1，此时引入下面 4 种操作！注意每次操作都是在最小不平衡子树上进行的。

**最小不平衡子树**：在**插入路径**上离**插入结点最近**的**平衡因子绝对值大于 1** 的结点**作为根的子树**。

下面的操作的最小不平衡子树的根结点为 A。

- RR（左单旋操作）：新结点在 A 的右孩子的右子树上插入，A 的右孩子为 B，则需要将 B 代替 A 作为根结点，A 作为 B 的左孩子，B 原本的左子树作为 A 的右子树。
- LL（右单旋操作）：新结点在 A 的左孩子的左子树上插入，A 的左孩子为 B，则需要将 B 代替 A 作为根节点，A 作为 B 的右孩子，B 原本的右子树作为 A 的左子树。
- RL（右左双旋操作）：新结点在 A 的右孩子的左子树上插入，A 的右孩子为 B，B 的左子树的根结点为 C，则需要先将 C 进行右旋操作，让 C 代替 B 的位置，然后再对 C 进行左旋操作，代替 A 的位置。
- LR（左右双旋操作）：新结点在 A 的左孩子的右子树上插入，A 的左孩子为 B，B 的右子树的根结点为 C，则需要先将 C 进行左旋操作，让 C 代替 B 的位置，然后再对 C 进行右旋操作，代替 A 的位置。

**具体的例子**：单次操作和多次操作的各举一个例子，比较简单，理解一下则可。

![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743667895235-4b97d5f7-977a-46c7-b56a-873e1e172481.jpeg)

------

**AVL 的构造**：

构造就是不断地插入结点，若插入的节点导致不满足 AVL 的性质时，使用上面的 4 中操作进行调整，直到要插入的结点全部插入。

------

**AVL 的删除**：

AVL 删除和 BST 的删除一样，不管多了一个判断平衡因子的步骤！

假设：删除 w 结点，判断该 AVL 是否平衡，若不平衡则从 w 开始向上回溯，找到的第一个不平衡的结点 z（最小不平衡子树的根）；y 是结点 z 高度最高的孩子结点，x 为 结点 y 高度最高的孩子结点。

- 若 y 是 z 的左孩子，x 是 y 的左孩子，使用右单旋操作。
- 若 y 是 z 的右孩子，x 是 y 的右孩子，使用左单旋操作。
- 若 y 是 z 的左孩子，x 是 y 的右孩子，使用左右双旋操作。
- 若 y 是 z 的右孩子，x 是 y 的左孩子，使用右左双旋操作。

这些操作都和 AVL 的插入如出一辙，就不再赘述了。

------

**AVL 的查找**：

这个和 BST 的查找一样，故其比较关键字的次数还是不超过 AVL 树的深度。

我们使用![img](https://cdn.nlark.com/yuque/__latex/0c3e4ad6127db0eaa2934769e2098781.svg)来表示深度为 h 的 AVL 中含有**最少的结点数**，则有：

![img](https://cdn.nlark.com/yuque/__latex/4debd1dae7a87dede549309d9151c011.svg)；

![img](https://cdn.nlark.com/yuque/__latex/90d491e76ef96c7710d60992e52c462b.svg)；

![img](https://cdn.nlark.com/yuque/__latex/c46a928b11c167a7ae9571374b0c70d8.svg);    

因为有左右子树相差不能超过 1 的条件，我们可以知道，![img](https://cdn.nlark.com/yuque/__latex/de82a7edf594edbb3540c7b16231dc73.svg)，因此含有 n 个结点的 AVL 最大深度为![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)故平均查找效率为：![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)

说了最少结点数的情况，不得不说一下**最多结点数的情况**，显然是 AVL 为满二叉树时，结点数最多咯！

------

### 红黑树（RBT）

在 AVL 中插入或者删除一个结点后，会频繁地调整全树整体的拓扑结构，这样的代价是很大的，究其原因还是条件太过严格，故为了减小消耗，引入条件更加宽松的**红黑树**。

**RBT**：可以是一颗空树或者满足以下条件的二叉树：

- 每颗结点要么是红色的，要么是黑色的
- 根节点是黑色的
- 叶结点（虚构的外部结点，NULL 结点）
- 不存在两个相邻的红结点
- 满足 BST 结点值的关系
- 每个结点到任意叶子结点的简单路径上，所含有的黑色结点数相同

怎样描述 RBT 的特性的呢？使用黑高（bh），概念如下：

黑高：从某结点出发（不包含该结点）到达一个叶子结点的任意一个简单路径上的黑色结点个数。

根据 RBT 的定义，我们可以知道几个关于 RBT的结论：

- **从根结点到叶子结点的最长路径不大于最短路径的 2 倍**。原因：在最短时，路径上的所有结点都为黑色，而最长时，是红黑相间的，故最长的路径不会超过最短的路径 2 倍。
- **有 n 个内部结点的 RBT 的高度** ![img](https://cdn.nlark.com/yuque/__latex/d4106b5a12936fd96b563b3a7c22525a.svg)。原因：因为在![img](https://cdn.nlark.com/yuque/__latex/8845e360e0c914556a99af8222f95fa9.svg) 时，RBT 的最少内部结点数![img](https://cdn.nlark.com/yuque/__latex/3dc57255e3604229fe9d3ea2eeef3ad1.svg)个，又因为 RBT 的 ![img](https://cdn.nlark.com/yuque/__latex/0f5a46fa3466282767b6a3121272aef5.svg)，故在 RBT 的内部结点树高为 h 时有：![img](https://cdn.nlark.com/yuque/__latex/3f1e280fc5dc585143eb3169eeda49b8.svg)，化简后就为上面的结论。
- **新插入 RBT 的结点初始时为红色**。原因：若插入结点为黑色则需要考虑每个结点到叶子结点的 bh 是否相等，调整起来很麻烦，而插入的新结点为红色的话，则只需要考虑相邻的结点是不是一样的红色，较为简单，而且只会在出现连续的两个红色结点才进行调整。

因为 RBT 是“适度平衡”，从 AVL 中每颗结点的子树高度相差不能超过 1 扩展到 RBT 每颗结点的子树相差不超过两倍，所以降低了调整的频率，维护的代价比收益小，故 RBT 在实际运用的很广！Java 中的 `TreeMap`和 `TreeSet`就是使用 RBT 实现的。

其查找的时间复杂度还是为：![img](https://cdn.nlark.com/yuque/__latex/65c54415e21b8b592c65dc4cd43cbd33.svg)。

------

**红黑树的插入**：

因为最基础的还是 BST，不过在这基础上进行优化了，所以插入的方式和 BST 的一样，但是若出现了违背 RBT 性质的结点出现则需要调整，调整的手段就是**旋转**+**调色**！

对于为什么会这样，有兴趣可以去搜索看看具体的证明，设计到了数学上面的证明，而我们是应试考试和使用者，明白这样使用就已经可以了，所以不用纠结为什么会这样，说白了，这样调整就是为了保持 RBT 的性质。

ok，下面来具体介绍怎样调整！

设插入的结点为 z。



![img](https://cdn.nlark.com/yuque/0/2025/jpeg/48073730/1743688151664-e0464ea6-e4fe-4da2-9a1d-aea29a24535a.jpeg)

## B 树和 B+树

### B 树

### B+树

## 散列表
