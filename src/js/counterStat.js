const refs = {
  appartments: document.getElementById('appartments'),
  clients: document.getElementById('clients'),
  employees: document.getElementById('employees'),
  awards: document.getElementById('awards'),
};

const autoCounter = () => {
  let appartments = 0;
  let clients = 0;
  let employees = 0;
  let awards = 0;

  const intervalClients = setInterval(() => {
    clients += 101;
    if (clients > 3854) {
      clearInterval(intervalClients);
      refs.clients.textContent = 3854;
    } else {
      refs.clients.textContent = clients;
    }
  }, 50);

  const intervalAppart = setInterval(() => {
    appartments += 21;
    if (appartments > 748) {
      clearInterval(intervalAppart);
      refs.appartments.textContent = 748;
    } else {
      refs.appartments.textContent = appartments;
    }
  }, 50);

  const intervalEmployees = setInterval(() => {
    employees += 2;
    if (employees > 24) {
      clearInterval(intervalEmployees);
      refs.employees.textContent = 24;
    } else {
      refs.employees.textContent = employees;
    }
  }, 100);

  const intervalAwards = setInterval(() => {
    awards += 1;
    if (awards > 24) {
      clearInterval(intervalAwards);
      refs.awards.textContent = 14;
    } else {
      refs.awards.textContent = employees;
    }
  }, 50);
};

autoCounter();
