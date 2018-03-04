#!/usr/bin/perl -w
use warnings;
use strict;

print 'Enter amount in USD: $';
my $dollars = <STDIN>;

my $euros = $dollars / 1.24;
my $yen = $dollars / .0095;
my $rupees = $dollars / .015;

print "in euros is $euros\n";
print "in yen is $yen\n";
print "in rupees is $rupees\n"