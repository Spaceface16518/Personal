#!/usr/bin/perl -w
use warnings;
use strict;

our $var;
$var = 3 + 2;
print $var;

{
  my $var;
  $var = 3 - 2;
  print $var;
}

print ($var + 2);