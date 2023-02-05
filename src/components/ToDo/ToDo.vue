<template>
	<div class=" container todo mb-3">

		<input type="text" class="form-control my-3" v-model="nuevaTarea" @keyup.enter="agregarTarea"/>
		<button class="btn btn-primary" @click="agregarTarea">Agregar</button>
        
		<div class="mt-3 alertas" v-for="(item, index) of tareas" :key="index">

			<div role="alert" :class="['alert' , item.estado ? 'alert-success' : 'alert-danger']">
				<div class="d-flex justify-content-between align-items-center">
                    <div>
                       {{ item.nombre }}
                    </div>
                    <div>
                        <button class="btn btn-success btn-sm" @click="editarTarea(index)">OK</button>
                        <button class="btn btn-danger btn-sm" @click="eliminar(index)">X</button>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ToDo",
	data() {
		return {
			titulo: "To-Do List",
			tareas: [],
			nuevaTarea: "",
		};
	},
	methods: {
		//No hacemos arrow function porque necesitamos trabajar con this, y arrow no permite
		agregarTarea: function () {
			/*  console.log("Diste click" , this.nuevaTarea); */
			this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            });
			//Una vez apretado el boton quiero que el input vuelva a quedar vacio
			this.nuevaTarea = "";
            localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
		},
        editarTarea:function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index,1)
            localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
        },
	},
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('todo-vue'))
        if(datosDB == null){
            this.tareas = []
        }
        else{
            this.tareas = datosDB;
        }
    }
};
</script>

<style>
.todo {
	border: solid 1px;
}
.alertas{
    width: 100%;
}
</style>
