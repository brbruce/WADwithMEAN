# Vagrant Usage Basics

Since I keep forgetting the basics on running Vagrant...

See webdev_setup.txt for more details on installing and upgrading.

Vagrant, VirtualBox should be installed.

Use cygwin too.

I set up aliases for common vagrant commands:

    $ alias
    alias cdgit='cd /cygdrive/c/Users/publi/OneDrive/Documents/GitHub'
    alias cdwebdev='cd /cygdrive/c/Users/publi/OneDrive/Documents/webdev/WADwithMEAN'
    alias edpl='/cygdrive/C/Program\ Files\ \(x86\)/EditPlus/editplus.exe'
    alias ls='ls -l'
    alias subl='/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe'
    alias vhalt='vagrant halt'
    alias vssh='VAGRANT_PREFER_SYSTEM_BIN=1 vagrant ssh'
    alias vup='vagrant up'

-------------------------------------------------------------

# Normal start/run:

You need to go to a directory with a vagrantfile.

    cdwebdev

    vup

    vssh

    cd /vagrant/expressTest

    node server

    (ignore error about bson)

    (in browser)\
    http://localhost:80

-------------------------------------------------------------

## How to deploy another customized instance of Vagrant 

-------------------------------------------------------------


## How to update the Unix version, the vagrant version, and VirtualBox version for an existing vagrant install

2/6/2019

VirtualBox version: 5.2.6 to 5.2.26

Start VirtualBox, will show a notice of new version.  Download and install.

Vagrant version: 2.0.1 to 2.2.3 (64 bit)

Download latest from hashicorp.  MSI file.  Install.

The webdev app worked after the updates without any other changes.

-------------------------------------------------------------

## Creating a new box with updated Ubuntu version

Check https://www.ubuntu.com/download/desktop for latest version (18.04)

Current version is 16.04.

Go to https://app.vagrantup.com/bento and find ubuntu 18.04.  https://app.vagrantup.com/bento/boxes/ubuntu-18.04

Go to latest version: https://app.vagrantup.com/bento/boxes/ubuntu-18.04/versions/201812.27.0

Cd to directory you want to install a new box instance in.  Then run vagrant init:

    vagrant init bento/ubuntu-18.04

This will just create a new vagrant file, but not install anything yet.  The only line enabled is config.vm.box which points to the bento box.

Then run vagrant up:

    vup

Now it will actually download the box and save it in `C:\Users\publi\.vagrant.d\boxes\` and create a .vagrant directory in the current directory.
