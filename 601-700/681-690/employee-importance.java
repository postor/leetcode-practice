
import java.util.List;
import java.util.HashMap;

class Employee {
  // It's the unique id of each node;
  // unique id of this employee
  public int id;
  // the importance value of this employee
  public int importance;
  // the id of direct subordinates
  public List<Integer> subordinates;
};

/*
 * // Employee info class Employee { // It's the unique id of each node; //
 * unique id of this employee public int id; // the importance value of this
 * employee public int importance; // the id of direct subordinates public
 * List<Integer> subordinates; };
 */
class Solution {
  public int getImportance(List<Employee> employees, int id) {
    HashMap<Integer, Employee> dic = new HashMap<Integer, Employee>();
    for (Employee employee : employees) {
      dic.put(employee.id, employee);
    }
    return this.getTotal(id, dic);
  }

  public int getTotal(int id, HashMap<Integer, Employee> dic) {
    Employee e = dic.get(id);
    int total = e.importance;
    for (int sid : e.subordinates) {
      total += getTotal(sid, dic);
    }
    return total;
  }
}