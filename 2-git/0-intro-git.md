# Introducción a GIT

<a href="diapositivas/2a-intro-git.html">ver diapositivas</a>

## ¿Qué es un sistema de control de versiones?

Un VCS (sistema de control de versiones) es aquel que registra los cambios
realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo
que se pueda recuperar versiones específicas más adelante.

## ¿Para qué sirve un sistema de control de versiones?

- Regresar a versiones anteriores de archivos.
- Regresar a una versión anterior del proyecto completo.
- Comparar cambios a lo largo del tiempo.
- Ver quién modificó por ultima vez algo.
- Ver quién y cuándo introdujo un problema.
- Recuperar archivos dañados o perdidos.

## Tipos de VCS

- Local
- Centralizado
- Distribuido

## VCS local

<img alt="local" src="/img/2-local.png" width="50%" />

## VCS centralizado

<img alt="centralizado" src="/img/2-centralizado.png" width="50%" />

## VCS distribuido

<img alt="distribuido" src="/img/2-distribuido.png" width="50%" />

## GIT

- ¿Qué es?
  - Sistema de control de versiones distribuido
- Objetivos
  - Velocidad
  - Diseño sencillo
  - Soporte para desarrollo no lineal
  - Completamente distribuido
  - Manejar grandes proyectos

## Fundamentos de GIT

1. Copias instantáneas, no diferencias
2. Operaciones locales
3. Integridad
4. Estados

## 1. Copias instantáneas, no diferencias

<img alt="almacenamiento1" src="/img/2-almacenamiento1.png" />

<img alt="almacenamiento2" src="/img/2-almacenamiento2.png" />

## 2. Operaciones locales

- La mayoría de las operaciones en Git sólo necesitan archivos y recursos locales para funcionar. Por lo general no se necesita información de ningún otro computador de la red.
- Debido a que se dispone de toda la historia del proyecto ahí mismo, en el disco local, la mayoría de las operaciones parecen prácticamente inmediatas.

## 3. Integridad

- Suma de verificación (SHA-1)
  - Cadena de 40 caracteres hexadecimales (0-9 y a-f)
  - Ejemplo: 24b9da6552252987aa493b52f8696cd6d3b00373

## 4. Estados

- Confirmado (committed): los datos están almacenados de manera segura en la base de datos local.
- Modificado (modified): se ha modificado el archivo pero todavía no se ha confirmado a la base de datos.
- Preparado (staged): se ha marcado un archivo modificado en su versión actual para que vaya en la próxima confirmación.Estados (Flujo de trabajo)Comandos

<img alt="areas" src="/img/2-areas.png" />

## Comandos

Configuración inicial

```git
git config --global user.name "nombre y apellido"
git config --global user.email <correo@email.com>
git config --global core.editor notepad
git config --list
```

Inicializar repositorio local

```git
git init
```

Estado del repositorio

```git
git status
git status -s
```

## Ciclo de vida del estado de los archivos

<img alt="ciclo-vida" src="/img/2-ciclo-vida.png" />

## Más comandos

Agregar

```git
git add archivo
```

Confirmar

```git
git commit -m ‘mensaje’
```

Agregar y confirmar

```git
git add archivo
git commit -a -m ‘mensaje’
```

Renombrar

```git
git mv nombre_viejo nombre_nuevo
```

Agregar archivo luego de confirmar

```git
git commit --amend
```

Deshacer archivo preparado

```git
git restore --staged archivo
```

Deshacer archivo modificado

```git
git restore archivo
```

Histórico

```git
git log
git log -1
git log -p -2
git log archivo
```

Clonar

```git
git clone repositorio
```

Ver repositorios remotos

```git
git remote -v
```

Añadir repositorios remotos

```git
git remote add nombre_repositorio
```

Traer repositorio remoto

```git
git fetch nombre
```

Traer y fusionar repositorios remotos

```git
git pull origin master
```

Enviar a repositorio remoto

```git
git push origin master
```
