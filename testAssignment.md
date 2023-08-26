---
js:
- https://carnap.io/shared/rzach@ucalgary.ca/dark-mode.js
- https://dsanson.github.io/carnap-javascript/js/timer.js
- https://carnap.io/shared/dsanson@gmail.com/save-work.js

css:
- https://carnap.io/shared/rzach@ucalgary.ca/dark-mode.css
- https://carnap.io/shared/rzach@ucalgary.ca/wideinput.css
- https://dsanson.github.io/carnap-javascript/css/timer.css
---

::: raw_html
<script>
console.log(CarnapServerAPI.user.firstName)
console.log(CarnapServerAPI.user.lastName)
console.log(CarnapServerAPI.assignment.description)
</script>
:::


![](https://ois2.ut.ee/student/assets/images/UT_logo_blue_en.svg)
<!-- 
## The third challenge

### **A.** Fill out the complete truth table.

1.
~~~{.TruthTable .Simple system="thomasBolducAndZachTFL" points=1 options="fonts exam nocheck nocounterexample"} 
1. (~P -> ~~Q), (P \/ (Q -> ¬P)) 
1. (R \/ (¬Q /\ ¬¬Q)), (R \/ (Q \/ ¬(R /\ ¬Q)))
1. (P /\ Q) \/ (¬P -> (¬Q \/ P)), ¬(P -> ¬(P -> P))
1. (P <-> ¬P), (Q \/ (P \/ ¬P))
1. (Q <-> (¬Q <-> ¬Q)), ¬((P->Q)->(Q->P))
1. (P /\ (¬(P /\ Q) \/ Q)), (P -> (P \/ Q))
1. (((P -> Q) -> ¬Q) -> ¬P), (P/\¬¬P)
1. P -> (¬P \/ Q), Q
1. (R -> (P \/ R)), (¬R \/ (P /\ R))
1. (P -> (Q /\ ¬P)), ((Q /\ ¬P) -> P) 
~~~

~~~{.QualitativeProblem .MultipleSelection}
2. Take the following pair of formulas "¬P <-> ¬Q" and "P /\ Q". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| * The formulas are jointly satisfiable.
| The first formula is a tautology.
| * The first formula is contingent.
| The second formula is a tautology.
| * The second formula is contingent.
2. Take the following pair of formulas "((R \/ ¬Q) \/ ¬(R /\ ¬Q))" and "(R \/ ¬(Q \/ ¬(R /\ ¬Q)))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| * The formulas are jointly satisfiable.
| * The first formula is a tautology.
| The first formula is contingent.
| The second formula is a tautology.
| * The second formula is contingent.
2. Take the following pair of formulas "(P /\ Q) \/ (P -> (Q \/ P))" and "¬(P -> ¬(P -> ¬P))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| The formulas are jointly satisfiable.
| The first formula is a contradiction.
| * The first formula is tautology.
| * The second formula is a contradiction.
| The second formula is tautology.
2. Take the following pair of formulas "((P /\ Q) \/ ¬(P \/ Q))" and "P <-> Q". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| * The formulas are equivalent.
| * The formulas are jointly satisfiable.
| The first formula is a contradiction.
| The first formula is tautology.
| The second formula is a contradiction.
| The second formula is tautology.
2. Take the following pair of formulas "(¬P /\ (Q -> P))" and "((Q \/ ¬¬Q) /\ P)". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| * The formulas are not jointly satisfiable.
| The first formula is a contradiction.
| The first formula is tautology.
| The second formula is a contradiction.
| The second formula is tautology.
2. Take the following pair of formulas "(¬(Q \/ ¬Q) \/ (Q -> (Q <-> Q)))" and ¬(P /\ (P /\ ¬(P /\ P))). Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| *The formulas are equivalent.
| *The formulas are not jointly satisfiable.
| The first formula is a contradiction.
| *The first formula is tautology.
| The second formula is a contradiction.
| *The second formula is tautology.
2. Take the following pair of formulas "((P \/ R) /\ (¬P \/ ¬R))" and "((P /\ R) \/ (¬P /\ ¬R))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| * The formulas are jointly satisfiable.
| The first formula is a tautology.
| * The first formula is contingent.
| The second formula is a tautology.
| * The second formula is contingent.
2. Take the following pair of formulas "(¬(R /\ P) /\ ¬(¬R \/ ¬P))" and "((P \/ ¬P) -> (R /\ ¬R))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| * The formulas are equivalent.
| The formulas are jointly satisfiable.
| The first formula is a tautology.
| The first formula is contingent.
| The second formula is a tautology.
| The second formula is contingent.
2. Take the following pair of formulas "(P <-> ((P /\ ¬P) \/ Q))" and "(P <-> ((Q /\ ¬Q) \/ P))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| The formulas are equivalent.
| * The formulas are jointly satisfiable.
| The first formula is a tautology.
| * The first formula is contingent.
| * The second formula is a tautology.
| The second formula is contingent.
2. Take the following pair of formulas "(P \/ (¬Q -> (Q /\ ¬P)))" and "(Q \/ ((P \/ ¬P) -> Q))". Then select the right descriptions of these formulas. NB: you may find this easier if you first write out a truth-table:
| * The formulas are equivalent.
| * The formulas are jointly satisfiable.
| The first formula is a tautology.
| * The first formula is contingent.
| The second formula is a tautology.
| * The second formula is contingent.
~~~ -->