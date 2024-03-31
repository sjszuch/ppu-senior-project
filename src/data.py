import matplotlib.pyplot as plt

employees = ['Manager', 'Developer', 'Designer', 'Tester', 'Analyst']
performance_scores = [4.2, 4.8, 3.9, 4.1, 4.5]

plt.figure(figsize=(10, 6))
plt.bar(employees, performance_scores, color='skyblue')
plt.title('Employee Performance Scores')
plt.xlabel('Employee Roles')
plt.ylabel('Performance Score')
plt.ylim(0, 5) #performance rankings out of five stars
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()
