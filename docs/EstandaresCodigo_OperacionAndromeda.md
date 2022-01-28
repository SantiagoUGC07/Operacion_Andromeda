# Estándares y buenas prácticas de código - Operación Andrómeda

[TOC]

## Control de versiones

| Versión | Comentarios            | Autor/Fecha     |
| ------- | ---------------------- | --------------- |
| 1.0     | Creación del documento | Josué Hernández |
|         |                        |                 |
|         |                        |                 |

## Estilo de código Java

### Estructura de Código

- **Sangría:** Los bloques de programa deben escribirse en un estilo de sangría. Utilice únicamente la tecla TAB para la sangría, no la barra espaciadora.

  ```java
  public class Ejemplo {
      
      //Código con tabulación
      
      while ( true ){
          
          //Tabualción al iniciar un bloque de código
      
      }
      
  }
  ```

  

- **Alineación:** El delimitador del bloque de programa La llave izquierda "{"  y la llave derecha "}" debe estar en su propia línea y al mismo tiempo alineado al enunciado que los cita. Las llaves que cierran el bloque de código deben de tener su propia línea.

  ```Java
  // Alineación
  if(true) {
      
      //Código
  
  } else {
  	
      while( true ) {
          //Código
      
      } //Fin bloque while
  
  }//Fin bloque if-else
  ```

  No está permitido escribir varias declaraciones cortas en una línea.

- **Salto de línea:** Una línea cuya longitud exceda los 80 caracteres requiere un salto de línea. Las reglas de salto de línea son las siguientes:

  - Desconectar después de una coma
  - Desconectar frente a un operador
  - Las expresiones largas deben dividirse en nuevas líneas en operadores de baja prioridad

- **Intervalo:** Se deben de utilizar las siguientes convenciones:

  - Se debe agregar una línea en blanco entre clases, métodos y bloques de programa relativamente independientes, y después de las descripciones de las variables.
  - Dejar un espacio después de las palabra clave.
  - Dejar un espacio seguido del corchete izquierdo "(" y después del identificador, para distinguir este último.
  - No deje un espacio entre el nombre del método/constructor y su paréntesis izquierdo "(" para distinguirlo de las palabras clave.
  - Se debe agregar un espacio antes y después de los operadores binarios, como "=", "+", etc .; no se deben agregar espacios antes y después de los operadores unarios, como "!" , "++", etc .;
  - La expresión en la instrucción for debe estar separada por espacios.
  - Cada línea debe contener como mucho una sentencia.

### Identificadores

Un **identificador** es el nombre simbólico que el programador asigna a algún elemento del programa: datos (variables, constantes, tipos de datos, archivos), operaciones (procedimientos o funciones) o el programa mismo para poder diferenciar uno de otro. 

-  Los identificadores están formados por una secuencia de caracteres, los caracteres pueden ser letras (A a Z, mayúsculas o minúsculas) y opcionalmente dígitos, aunque también se acepta el carácter de subrayado **_** o guión bajo. Sin embargo generalmente no aceptan los acentos, espacios en blanco,  ni la **ñ**/**Ñ**.

- Letras, dígitos y el carácter subrayado (_) están permitidos después del primer carácter.

- La longitud de identificadores puede ser de hasta 30 caracteres.

- Cada identificador debe ser único en el programa o contexto donde se usa y debe tener un nombre que indique el contenido u operación del elemento nombrado. 
-  El primer carácter de un identificador no puede ser un número.
- Los nombres que se usen deben ser significativos.

Ejemplo:

| Válidos   | No válidos |
| --------- | ---------- |
| fecha_nac | año_nac    |
| num       | 1num       |
| var1      | ?var 2     |
| eNumero   | eNúmero    |

#### Notación Húngara

La notación húngara es una convención sobre la denominación de identificadores. Se aplica principalmente a la denominación de variables, pero también puede cubrir la denominación de clases y objetos. La notación es un intento de formalizar cómo un nombre de variable puede indicar su tipo o propósito.

| Prefijo                  | tipo                             | Ejemplo       |
| :----------------------- | :------------------------------- | :------------ |
| **b**                    | booleano                         | bLuzEncendida |
| **c**                    | caracter                         | cLetraGrade   |
| **str**                  | string, cadena                   | strCategoria  |
| **i**                    | número entero                    | iRuedas       |
| **f**                    | flotante                         | fKilomentros  |
| **C**                    | clase                            | CPersona      |
| **{nombre de la clase}** | objeto                           | autoNissan    |
| **a**                    | arreglo                          | aNumeros      |
| **d**                    | double                           | dTotalFactura |
| **n**                    | enumerados                       | nDias         |
| **v**                    | variables (lenguajes no tipados) | vDato         |
| **by**                   | byte                             | bNumByte      |

### Declaraciones

#### Variables

- En caso de variable temporales que va a ser utilizada en las líneas siguientes, se pueden poner identificadores que no tengan algún significado, pero si va a ser utilizada más lejos en el programa, debe tener un nombre significativo.
- Cuando se lee un registro de una tabla de la base de datos, el nombre del registro, debe empezar por **row** y luego tener el nombre de la tabla.
- Se recomienda una declaración de variable por línea, ya que facilita los comentarios.
- Los identificadores de variables deben estar en minúsculas.
- Si el identificador de variable contiene dos palabras (o notación húngara), se debe de utilizar el camel case (ej. **nombreCompleto**).
- Se debe evitar el uso de variables globales ya que pueden ser modificadas erróneamente y pueden causar errores muy difíciles de identificar.
- Los nombres de las variables no deben comenzar con un guión bajo o un signo de dólar.
- Evitar las variables locales declaradas para sobrescribir las variables declaradas en el nivel anterior, es decir, no declarar el mismo nombre de variable en el bloque de código interno.
- Declarar las variables solo al principio del bloque de código.
- Seguir el principio de proximidad. No está permitido definir una variable local y luego usarla en un lugar lejano
- Orden de declaración: 
  - Constante 
  - Variable de clase
  - Variable de instancia.
- Se recomienda que todos los campos sean privados y se acceda a ellos mediante funciones miembro get y set (Getter, Setter).

#### Constantes

- Se deben evitar constantes numéricas sin mucho significado.
-  Todos los caracteres deben estar en mayúsculas y las palabras separadas por "_".

#### Clases y Objetos

- Evitar construir y liberar objetos dentro de un bucle.

#### Ciclos

- Si no se conoce de antemano el número de veces a realizar el ciclo, la(s) condición(es) de terminación siempre se deberá(n) poder evaluar como falsa(s) o verdadera(s).

- Siempre se debe verificar que en algún momento las condiciones se llegan a cumplir para poder dar por terminado el ciclo para no crear un ciclo infinito

- En el caso de un ciclo mientras-hacer, se debe prever que la condición se ejecuta sólo cuando es verdadera, ya que si desde el principio no lo es, jamás se ejecutará el ciclo.

- Lo más conveniente en las pruebas en las condiciones es que sean *mayor* o *menor que* en lugar pruebas de igualdad o desigualdad.

- Cuando se realicen comparaciones con valores reales se deben usar los operadores <, <=, > o >=, ya que como esos valores se almacenan en cantidades aproximadas, las comparaciones de igualdad normalmente plantean problemas.
-  Se debe usar la lógica positiva, si A = B en vez de si no es A <> B.

- Se debe verificar que las operaciones dentro del ciclo realmente sean las que se desean repetir, ya que si no se modifica su valor dentro del ciclo, esto sólo ocasionará que el proceso sea más lento.

- Se pueden tener tantos niveles de anidamiento como se requieran, pero se debe tomar en cuenta que siempre se terminarán primero los ciclos más internos y posteriormente los externos.

-  Cuando se empleen contadores, se debe evitar emplearlos para otras funciones que puedan modificar su valor sin tener control de ello, ya que esto puede provocar un ciclo infinito o un error en el proceso.

- Después de realizar las acciones del ciclo, se sigue con el curso normal del proceso, esto quiere decir, que después de ejecutar el ciclo, se ejecutan las siguientes acciones del proceso.

#### Módulos (Funciones)

La clave para la construcción de programas es la descomposición del proceso en módulos de una sola tarea comprensible, y estructurar estos módulos para proporcionar una implementación elegante de la solución del problema. Para lograr una buena modularización se realizan los siguientes pasos:

- Describir el módulo principal

- Describir los módulos secundarios
- Los nombres de módulos deben de ser verbos en infintivo (ej. ***realizarSuma*** )
- Cada módulo debe realizar sólo una función
- Cada módulo debe tener máximo una página de instrucciones (50 renglones máximo)
- Se deben evitar las variables externas (globales)
- Evitar demasiados niveles de modularización
- Estructura de caja negra para cada módulo (no debe ser importante para el usuario cómo se resuelve el problema, sino cómo se usa)
- Para implementar funciones o procedimientos sólo se necesita aislar el código que va a formar parte de él, delimitarlo según la sintaxis del lenguaje concreto e invocarlo desde cualquier parte del programa.
- Una función tiene los mismos elementos de un programa: cabecera con la definición de la función y cuerpo de la función, que serán instrucciones cuya ejecución hará que se asigne un valor al nombre de la función. Esto define el resultado que devuelve al programa que la llamó.
- Orden de declaración: 
  - método de construcción
  - método público estático 
  - método privado estático 
  - método público 
  - método amigo 
  - método protegido
  - método privado
  - método principal

## Estilo de Código HTML

- Declarar siempre el tipo de documento como la primera línea en el documento:

- Evitar mezclar nombres en mayúsculas y minúsculas en las etiqueta
- Utilizar minúsculas en los nombres de elementos
- Cerrar todos los elementos HTML

- Cerrar los elementos HTML con una La barra oblicua (/)

  <meta charset="utf-8"/>

- Usar minúsculas nombres de los atributos

- Utilizar comillas dobles en los id y clases.

- La mezcla de estilos no es bueno
- Los valores indicados son más fáciles de leer

- Utilizar siempre el **alt** atributo con imágenes. Es importante cuando la imagen no se puede ver.
- Siempre definir tamaño de la imagen. Se reduce el parpadeo ya que el navegador puede reservar espacio para las imágenes antes de cargarse.
- Evitar las líneas de código largo (código de más de 80 caracteres).

- No añadir líneas en blanco sin una razón.

- Para facilitar la lectura, añadir líneas en blanco para separar los bloques de código grandes o lógicos.

- Para facilitar la lectura, añadir 2 tabulaciones.
- No utilizar líneas en blanco innecesarios y sangría. 
- No es necesario el uso de líneas en blanco entre elementos cortos y relacionados. 
- No es necesario aplicar la sangría cada elemento.

- No omitir las etiquetas <html>, <head> y <body> 

- Para asegurar una interpretación apropiada y correcta indexación de los motores de búsqueda, tanto el lenguaje como la codificación de caracteres debe definirse lo antes posible en un documento.

- Breves comentarios deben escribirse en una sola línea, con un espacio después 

  <!-- espacio antes y despues --> 

- Comentarios largo, que abarca muchas líneas, se deben escribir con <!-- y --> En líneas separadas:

  <!--
   This is a long comment example. This is a long comment example. This is a long comment example.
   This is a long comment example. This is a long comment example. This is a long comment example.
  -->

- Aplicar sangría de dos espacios a los comentarios largos.

- Utilice la sintaxis sencilla para unir las hojas de estilo

  <link rel="stylesheet" href="styles.css">

- Utilice la sintaxis sencilla para cargar scripts externos. 

  <script src="myscript.js">

- Utilizar siempre los nombres de archivo en minúsculas.
- Los archivos HTML deben tener una extensión **.html**

## Estilo de Código CSS

- Coloque el soporte de apertura en la misma línea que el selector.
- Utilizar un espacio antes del paréntesis de apertura.
- Utiliza una tabulación de sangría.
- Utilizar el espacio después de cada coma o punto y coma.
- Utilice punto y coma después de cada pareja propiedad-valor, incluyendo la última.
- Utilizar comillas alrededor de valores si el valor contiene espacios.
- Coloque el cierre de un bloque de código en una nueva línea, sin espacios iniciales.
- Evitar las líneas de más de 80 caracteres.

## Estilo de Código JavaScript



## Estilo Código SQL



## Documentación

Esta actividad se realiza durante todo el ciclo de vida del desarrollo, consiste en la descripción de la información obtenida y las actividades realizadas durante el desarrollo. Se dividir en:

- ***Interna***: comentarios a lo largo de un programa.

- ***Externa***: diagramas, código y descripción del mismo, toda la documentación creada durante las etapas de análisis y diseño, la cual será muy útil en el futuro para las eventuales actividades de mantenimiento.

### Documentación Interna

#### Comentarios

Es conveniente añadir comentarios (cuantos más mejor) para poder saber que función tiene cada parte del código, en caso de que no lo utilicemos durante algún tiempo. Además facilitaremos el trabajo a los integrantes del equipo para que puedan utilizar nuestro archivo fuente. 

Los comentarios son textos que permiten dar información a los desarrolladores sobre el programa y las instrucciones en él y no son tomados en cuenta como parte del programa. Los comentarios pueden colocarse al lado de una instrucción para explicarla o pueden colocarse antes de un grupo de instrucciones.



## Historias de Usuario

### Crear Historias de Usuario

Las historias de usuario son descripciones **cortas y simples** de una característica **contada desde la perspectiva de la persona que desea la nueva capacidad**, generalmente un usuario o cliente del sistema. La plantilla para describirlas es la siguiente:

```cardExample
id_HistoriaUsuario: HU-CALC-000

Como <Usuario>

Quiero <algún objetivo>

Para que <motivo>

Criterio de Aceptación: <Lo que se espera para que una tarea se considere lista>
```

- **Identificador** se especifica con la nomenclatura **HU-ABCD-XXX** donde:
  - **ABCD** corresponde a un nombre clave del modulo del sistema
  - **XXX** corresponde la número de historia de usuario
- **Definición de “Listo”**: la historia suele estar “lista” cuando el usuario puede completar la tarea descrita, pero debes asegurarte de definir lo que representa completarla.
- **Describe tareas o subtareas**: decide qué pasos específicos deben completarse y quién es responsable de cada uno de ellos.
- **Perfiles de usuario**: ¿para quién? Si hay varios usuarios finales, considera crear varias historias.
- **Pasos ordenados**: escribe una historia para cada paso en un proceso más grande.
- **Escucha el feedback**: Hablar y captar los problemas o necesidades que se dicen. No es necesario tener que estar adivinando las historias cuando puedes obtenerlas de los interesados del proyecto.
- **Tiempo**: Las historias deberían completarse en un sprint y aquellas que puedan necesitar semanas o meses deberían dividirse en historias más pequeñas.

### Análisis de Historias de Usuario

Se debe de estudiar el problema y se determinan a muy alto nivel los procesos, los ***datos disponibles*** (entrada) y los ***datos resultantes*** o información (salida), así como de los ***datos auxiliares***. Para realizar un buen análisis será necesario interactuar con el cliente y los usuarios y conocer a fondo sus necesidades.

 

El análisis se puede dividir a su vez en tres etapas:

- 1ª. etapa. Consiste en definir los resultados esperados; es decir, la información que deberá producirse como salida. 

-  2ª. etapa. Consiste en identificar los datos que se tienen como materia prima y que constituirán la entrada del programa. Es importante compararlos contra los datos de salida para ver si son suficientes para obtener los resultados deseados.

- 3ª. etapa. Tiene como finalidad determinar el proceso necesario para convertir los datos de entrada en la información que se tendrá como salida. 

Con base en este análisis, se puede realizar las especificaciones de entrada, salida y proceso.

### Especificaciones de Entrada

Al especificar la entrada de datos se debe considerar:

- Cómo están organizados y que formato tienen los datos que se procesarán con el programa.
- Si los datos van a ser creados por el programa.
- Si los datos se capturan mediante teclado
- Si se leerán los datos desde un dispositivo de almacenamiento.
- Cómo están formateados los datos, cómo flujos de caracteres u otra forma.
- Si los datos se deben ingresar por el usuario uno a uno.
- Si se leerán registros uno a uno desde un archivo.
- Cómo se acceden los archivos de datos.
- Si los datos serán numéricos o alfanuméricos o si vendrán empaquetados.

Se deben de especificar las precondiciones, que son las condiciones que el algoritmo asume que deben cumplir los datos de entrada.

### Especificaciones de Salida
Para especificar la salida, se debe considerar:

- Cuál es la estructura, contenido y formato de la salida deseada.
- Cual información de salida debe ser impresa, cuál se mostrará en pantalla o se almacenará en disco.
- En caso de listados, cuáles serán los títulos y pies de página.
- Para salida a pantalla, cuál es el formato y si se debe imprimir.
- Para almacenamiento de datos, cuáles son las descripciones de los registros y en que formato se graban.

Se deben de especificar las postcondiciones, que describen cómo deben estar calculados los datos de salida.

### Especificaciones de Proceso
En el caso del proceso se debe considerar:

- Cuál es el algoritmo requerido para transformar los datos de entrada en la salida deseada.
- Qué cálculos son necesarios.
- Si los datos de entrada deben ser ordenados.
- Si es necesario validar la consistencia de la información.
- Si los datos deben mantener algún formato entre la entrada y la salida.
- Si se necesitarán depósitos temporales de datos tales como tablas o archivos de paso.
- Cuáles son las condiciones límite (que pueden causar errores).

Las especificaciones del proceso incluye clasificar, ordenar, calcular y sumarizar los datos.

### Tarjetas de especificación

Es recomendable que las especificaciones de entrada, salida y proceso se realicen por medio de tarjetas. El formato de contenido deberá de ser el siguiente

```cardExample
id_HistoriaDeUsuario: HU-CALC-000
Definición del Problema:  Crear un algoritmo que sume dos números enteros

Análisis

- Datos de salida: 
  - eSuma -> el resultado de la suma de dos números.
- Poscondiciones:
  - eSuma es un número entero.
  - eSuma es el resultado de la suma.
- Datos de entrada:
  - a -> valor numérico.
  - b -> valor numérico.
- Precondiciones:
  - a y b son números enteros.
  - a y b pueden ser positivos, negativos o ceros
- Operaciones/Funciones:
  - suma = a + b
  - sumarEnteros(a, b)
```

## Despliegue

## Frameworks

## Administración de Versiones

