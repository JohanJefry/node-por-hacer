const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}
const argv = require('yargs')
    .command('crear', 'Crea en consola', {
        descripcion
    })
    .command('actualizar', 'Actualizar en consola', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv



module.exports = {
    argv
}