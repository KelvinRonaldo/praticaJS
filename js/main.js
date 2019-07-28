class List{
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data);
	}
}

class ToDoList extends List{
	constructor(){
		super();
		this.usuario = "Kelvin";
		this.toDos = [];
	}

	mostrarUsuario(){
		console.log(this.usuario);
	}

	static addToDo(){
		this.toDos.push("Novo ToDo herdeiro");
		console.log(this.toDos);
	}
}

class Math{
	static soma(a, bt){
		console.log(a + b);
	}
}

var minhaLista = new ToDoList();

var btnNew = document.getElementById("btn-novo-toDo");

btnNew.onclick = function(){
	minhaLista.add("Novo ToDo na classe mãe");
	Math.soma(5, 3);
};
minhaLista.mostrarUsuario();