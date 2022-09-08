# El hook useEffect y peticiones AJAX a apis

Aqui se estudia el hook useEffect para realizar acciones desencadenadas y montar / desmontar componentes y como se realizan
peticiones ajax

## Resumen 🚀

### Contador 🛠️
Un componente donde se declara un estado contador y si llega a 10 se monta el componente Alerta

### Alerta 🛠️
Este componente haciendo uso del hook, lanza una alerta cada vez que se monta y otra cuando se desmonta

### PeticionAjax 🛠️
Este componente se encarga de obtener y transmitir los datos del municipio que quieras averigurar

### Tarjeta_tiempo_pueblo 🛠️
Muestra la información enviada desde el componente padre. Para hacer esto por props se usa un atipatrón como se muestra en la documentacion : https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#anti-pattern-erasing-state-when-props-change

---