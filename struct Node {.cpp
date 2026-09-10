struct Node {
    int value;
    Node** next;  // array of next pointers (levels)
};
class SkipList {
    int MAX_LEVEL;
    Node* header;
    
public:
    Node* search(int key) {
        Node* current = header;

        for (int i = MAX_LEVEL - 1; i >= 0; i--) {

            while (current->next[i] != nullptr && current->next[i]->value < key) {
                current = current->next[i];
            }
        }
        current = current->next[0];

        if (current != nullptr && current->value == key) {
            return current;
        }

        return nullptr; // not found
    }
};