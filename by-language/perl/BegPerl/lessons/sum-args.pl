#!/usr/bin/perl
use strict;
use warnings;
use Scalar::Util qw(looks_like_number);

# PROGRAM
print "Enter some arguments separated by spaces: ";
our @arguments = ();
get_args();
our $sum = sum_args(@arguments);
print_args(@arguments);

# SUBROUTINES
sub print_args
{
  for (my $i = 0; $i <= $#arguments; $i++)
  {
    my $argument = $arguments[$i];
    if ($i == $#arguments)
    {
      print "$argument = ";
    }
    else
    {
      print "$argument + ";
    }
  }
  print "$sum";
}

sub get_args
{
  print "Enter some arguments, or enter a blank line to sum\n";
  my $continue = 1;

  while ($continue == 1)
  {
    print "Enter an argument: ";
    my $argument = <STDIN>;
    chomp($argument);
    if(!$argument)
    {
      $continue = 0;
    }
    else
    {
      if(!looks_like_number($argument))
      {
      print "Please enter numbers only";
      exit;
      }
      push(@arguments, $argument);
    }
  }
}

sub sum_args
{
  my $total = 0;
  foreach (@arguments)
  {
    $total += $_ ;
  }
  return $total;
}